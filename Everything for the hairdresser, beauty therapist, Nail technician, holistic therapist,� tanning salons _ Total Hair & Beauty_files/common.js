// JavaScript Document


function clearDefault(textbox) {
  if (textbox.defaultValue==textbox.value) textbox.value = ""
}

function toggle(on)
{
	if(document.getElementById(on).style.display == 'none')
	{	document.getElementById(on).style.display = 'block';	}
	else
	{	document.getElementById(on).style.display = 'none';	}
}

