import React from 'react'

function Footer() {
  return (
    <div className='ml-0 mt-4 md:ml-16 p-4 '>
        <hr />
      <footer className="pt-4 footer text-base-content dark:bg-slate-900 dark:text-white">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
   
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text dark:bg-slate-900 dark:text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>  
</footer>
<footer className="footer footer-center p-2 text-base-content mt-4 dark:bg-slate-900 dark:text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by MKBookShop</p>
  </aside>
</footer>
    </div>
    
  )
}

export default Footer
