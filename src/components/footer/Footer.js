import React from "react";
import './Footer.css'
function Footer() {
    return (
        <footer class="footer">
            <div class="footer-content">
            {/* <a href="https://github.com/15ahmad9">Linkedin</a>
            <p>Auther: Ahmad Ghanem</p>
             */}
            <p class="Copyright">Copyright &copy;
                <script>document.write(new Date().getFullYear())</script> All rights reserved to Ahmed Ghanem
            </p>
        </div>
        </footer>
    );
}

export default Footer;