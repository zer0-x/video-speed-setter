document.getElementById('source').textContent =
	browser.i18n.getMessage('source');
document.getElementById('author').textContent =
	browser.i18n.getMessage('author');
document.getElementsByTagName('title')[0].textContent =
	browser.i18n.getMessage('extensionName');

document
	.getElementsByTagName('html')[0]
	.setAttribute('lang', browser.i18n.getUILanguage());

['keyup', 'change'].forEach((event) =>
	document
		.getElementById('speedInput')
		.addEventListener(event, applyPlayBackRate)
);

function applyPlayBackRate() {
	const executing = browser.tabs.executeScript({
		code:
			"document.querySelectorAll('video').forEach(video => video.playbackRate =" +
			document.getElementById('speedInput').value +
			')',
	});

	executing;
}
