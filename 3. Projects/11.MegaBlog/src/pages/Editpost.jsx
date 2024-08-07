import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import databaseService from "../appwrite/storagedatabsefileupload.js";
import { useNavigate, useParams } from "react-router-dom";

function Editpost() {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      databaseService.getPost(
        slug.then((post) => {
          if (post) {
            setPosts(post);
          }
        })
      );
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
