document.getElementById('text').innerHTML = 'wow so javascript much web'

anchors = document.querySelectorAll('a:not([href])')
document.getElementById('a_count').innerHTML = anchors.length
document.getElementById('a0_content').innerHTML = anchors[0].innerHTML

forms = document.getElementsByTagName('form')
document.getElementById('form_count').innerHTML = forms.length
document.getElementById('form0_name').innerHTML = forms[0].getAttribute('name')

images = document.getElementsByTagName('img')
document.getElementById('img_count').innerHTML = images.length
document.getElementById('img0_id').innerHTML = images[0].getAttribute('id')

links = document.querySelectorAll('a[href]')
document.getElementById('link_count').innerHTML = links.length
document.getElementById('link0_id').innerHTML = links[0].getAttribute('id')

document.getElementById('hostname').innerHTML = location.hostname
document.getElementById('referrer').innerHTML = document.referrer
document.getElementById('title').innerHTML = document.title
document.getElementById('url').innerHTML = location.href