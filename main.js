// Remove previous content and simplify
document.querySelector('#app').innerHTML = `
  <div>
    <h1>欢迎访问我的网站</h1>
    <nav>
      <ul>
        <li><a href="#home">首页</a></li>
        <li><a href="#about">关于</a></li>
        <li><a href="#contact">联系我们</a></li>
      </ul>
    </nav>
    
    <section id="home">
      <h2>首页</h2>
      <p>欢迎来到这个简单的网页。本站适配移动端，并支持系统主题切换。</p>
    </section>

    <section id="about">
      <h2>关于我们</h2>
      <p>这是一个使用纯HTML构建的简约网站。我们致力于为您提供最好的服务。</p>
    </section>

    <section id="contact">
      <h2>联系方式</h2>
      <address>
        电子邮件: <a href="mailto:example@example.com">example@example.com</a><br>
        电话: <a href="tel:+8612345678900">123-4567-8900</a>
      </address>
    </section>

    <footer>
      <p>&copy; 2024 我的网站。保留所有权利。</p>
    </footer>
  </div>
`