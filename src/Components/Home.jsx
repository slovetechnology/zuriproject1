import React from 'react'
import ProfileLink from './ProfileLink';
import Footer from './Footer'
import Header from './Header';
import SocialLinks from './SocialLinks';


const Home = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <Header username="annette black" />
        <ProfileLink title="twitter link" link="@slovetech" id="twitter" />
        <ProfileLink title="zuri team" link="https://training.zuri.team" id="btn_zuri" />
        <ProfileLink title="zuri books" link="https://books.zuri.team" id="books" />
        <ProfileLink title="python books" link="https://books.zuri.team/python-for-beginners?ref_id=georgegodslove" id="book_python" />
        <ProfileLink title="Background Checks for Coders" link="https://background.zuri.team" id="pitch" />
        <ProfileLink title="design books" link="https://books.zuri.team/design-rules" id="book_design" />
        <SocialLinks />
        <Footer />
      </div>
    </div>
  )
}

export default Home
