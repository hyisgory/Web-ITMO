function disable(button)
{
	button.disabled = true
}

button = document.getElementById('button')

document.getElementById('button_name').innerHTML = button.getAttribute('name')
document.getElementById('button_type').innerHTML = button.getAttribute('type')
document.getElementById('button_value').innerHTML = button.getAttribute('value')
document.getElementById('button_parent_id').innerHTML = button.form.getAttribute('id')

form = document.forms['form']

table = document.getElementById('form_elements_values')
formElements = form.elements
tableContent = ''
for (i = 0; i < formElements.length; i++) {
	tableContent += '<tr><td>' + i + '</td><td>' + formElements[i].getAttribute('value') + '</td></tr>'
}
	
table.innerHTML += tableContent

document.getElementById('form_action').innerHTML = form.getAttribute('action')
document.getElementById('form_enctype').innerHTML = form.getAttribute('enctype')
document.getElementById('form_ele_num').innerHTML = formElements.length
document.getElementById('form_method').innerHTML = form.getAttribute('method')
document.getElementById('form_name').innerHTML = form.getAttribute('name')