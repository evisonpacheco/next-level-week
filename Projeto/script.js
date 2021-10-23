const socialMediaLinks = {
  github: 'evisonpacheco',
  instagram: 'evison.exe',
  linkedin: 'in/evisonpacheco'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //alert(social)
    //alert(li.children[0].href) exibe o href do filho (posição 0) da tag <li>
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()