async function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", document.getElementById("webhook_url").value);

    request.setRequestHeader('Content-type', 'application/json');
    if (document.getElementById("webhook_url").value == "") {
      document.getElementById("webhook_url").focus()
      alert("Give the webhook url!")
      return
  }

  if (document.getElementById("message").value == "") {
  document.getElementById("message").focus()
  alert("Cannot send an empty message")
  return
}
if (document.getElementById("embed_title").value == "" && document.getElementById("embed_description").value == "" && document.getElementById("embed_color").value == "" && document.getElementById("embed_author").value == "" && document.getElementById("embed_footer_image").value == "" && document.getElementById("embed_footer").value == "" && document.getElementById("embed_thumbnail_url").value == "") {
var params = {
      username: document.getElementById("username").value,
      avatar_url: document.getElementById("avatar_url").value,
      content: document.getElementById("message").value,
}
    await request.send(JSON.stringify(params))
    alert("Successful!")
    document.getElementById("message").value = ""
    document.getElementById("webhook_url").value = ""
    document.getElementById("avatar_url").value = ""
    document.getElementById("username").value = ""
    document.getElementById("embed_title").value = ""
    document.getElementById("embed_description").value = ""
    document.getElementById("embed_color").value = ""
    document.getElementById("embed_author").value = ""
    document.getElementById("embed_footer_image").value = ""
    document.getElementById("embed_footer").value = ""
    document.getElementById("embed_thumbnail_url").value = ""
    return
  }
  var params = {
      username: document.getElementById("username").value,
      avatar_url: document.getElementById("avatar_url").value,
      content: document.getElementById("message").value,
      embeds: [{
          title: document.getElementById("embed_title").value,
          description: document.getElementById("embed_description").value,
          color: parseInt(document.getElementById("embed_color").value),
          author: {
            name: document.getElementById("embed_author").value,
            icon_url: document.getElementById("embed_author_avatar_url").value
          },
          image: {
            url: document.getElementById("embed_image").value
          }, 
          footer: {
            text: document.getElementById("embed_footer").value,
            icon_url: document.getElementById("embed_footer_image").value
          },
          thumbnail: {
              url:  document.getElementById("embed_thumbnail_url").value
          }
        }]
      }
    await request.send(JSON.stringify(params))
    alert("Successful!")
    document.getElementById("message").value = ""
    document.getElementById("webhook_url").value = ""
    document.getElementById("avatar_url").value = ""
    document.getElementById("username").value = ""
    document.getElementById("embed_title").value = ""
    document.getElementById("embed_description").value = ""
    document.getElementById("embed_color").value = ""
    document.getElementById("embed_author").value = ""
    document.getElementById("embed_footer_image").value = ""
    document.getElementById("embed_footer").value = ""
    document.getElementById("embed_thumbnail_url").value = ""
}