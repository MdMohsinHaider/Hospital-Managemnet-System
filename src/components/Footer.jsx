import style from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={style.footer}>
    <p>© {new Date().getFullYear()} Hospital Management. All rights reserved.</p>
  </footer>
  )
}

export default Footer