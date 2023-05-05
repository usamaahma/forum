import React from "react";
import Styles from "../styles/Topic.module.css";
import { Row, Col } from "antd";
import MainHeader from "@/components/common/mainHeader";
import Footer from "@/components/common/footer";
import BlogHeroSection from "@/components/Blog/BlogHeroSection";
import BlogImageSection from "@/components/Blog/BlogImageSection";
import BlogForm from "@/components/Blog/BlogForm";

function BlogFormPage() {
  return (
    <div>
      <MainHeader />
      <BlogHeroSection />
      <div className={Styles.mainland11}>
        <BlogForm />
      </div>
      <Footer />
    </div>
  );
}

export default BlogFormPage;
