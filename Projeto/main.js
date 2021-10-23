//Mude os valores para seus usuários e tenha seu próprio crachá personalizado.
const socialMediaLinks = {
  github: 'evisonpacheco',
  instagram: 'evison.exe',
  linkedin: 'in/evisonpacheco'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) { //passa as informações das tags filhas de SocialLinks para a variável li
    const social = li.getAttribute('class') //pega o valor da class de li para a variável social
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}` // substitui o href da tag filha (posição 0) da tag armazenada na variável li.
  }
}

changeSocialMediaLinks()

function getGitHubUserInfos() {
  const urlUser = `https://api.github.com/users/${socialMediaLinks.github}`

  fetch(urlUser)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubUserInfos()

