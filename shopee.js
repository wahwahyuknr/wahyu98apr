var angk = Math.floor(Math.random() * 9) + 1;  
					if(angk =="1"){
	imgPrdct="https://down-id.img.susercontent.com/file/id-11134207-7quky-lh6gfhlxthgw28";
    linkPrdct="https://shope.ee/8KMvOAdw2E";
    				} else if(angk =="2"){
	imgPrdct="https://down-id.img.susercontent.com/file/1e1ad9f17df6e6b041189bb2dea7ca47";
    linkPrdct="https://shope.ee/8UgLaTdIhH";
					} else if(angk =="3"){
	imgPrdct="https://down-id.img.susercontent.com/file/6b3e927d5ef8df5a527aea8339368203";
    linkPrdct="https://shope.ee/8ezlmmcfMK";
					} else if(angk =="4"){
	imgPrdct="https://down-id.img.susercontent.com/file/1e8f2a93655d9a1307836b7bdc05a003";
    linkPrdct="https://shope.ee/8pJBz5c21N";
					} else if(angk =="5"){
	imgPrdct="https://down-id.img.susercontent.com/file/sg-11134201-23020-brst5v4ak4mvf6";
    linkPrdct="https://shope.ee/8zccBObOgQ";
					} else if(angk =="6"){
	imgPrdct="https://down-id.img.susercontent.com/file/824b98dbd14e548617ab074dbe610d54";
    linkPrdct="https://shope.ee/99w2NhalLT";
					} else if(angk =="7"){
	imgPrdct="https://down-id.img.susercontent.com/file/622fe46b1f968374198615a2182fd32a";
    linkPrdct="https://shope.ee/1LDB3J4aEy";
					} else if(angk =="8"){
	imgPrdct="https://down-id.img.susercontent.com/file/7ea00d0d0f484a5769e83dada03221ce";
    linkPrdct="https://shope.ee/1VWbFc3wu1";
					} else if(angk =="9"){
	imgPrdct="https://down-id.img.susercontent.com/file/c4fc699fe1e1079c4cedb2d4a9c23bc7";
    linkPrdct="https://shope.ee/1fq1Rv3JZ4";
					} else if(angk =="10"){
	imgPrdct="https://down-id.img.susercontent.com/file/id-11134207-23020-adopy8fo7lnvcd";
    linkPrdct="https://shope.ee/1q9ReE2gE7";
					}  

    // Create the interstitial container
    var interstitial = document.createElement('div');
    interstitial.id = 'interstitial';
    interstitial.style.display = 'none';
    interstitial.style.position = 'fixed';
    interstitial.style.top = '0';
    interstitial.style.left = '0';
    interstitial.style.width = '100%';
    interstitial.style.height = '100%';
    interstitial.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    document.body.appendChild(interstitial);

    // Create the interstitial link element
    var interstitialLink = document.createElement('a');
    interstitialLink.href = linkPrdct;
    interstitialLink.target = '_blank'; 
    interstitial.appendChild(interstitialLink);

    // Create the interstitial image element
    var interstitialImage = document.createElement('img');
    interstitialImage.id = 'interstitialImage';
    interstitialImage.style.display = 'block';
    interstitialImage.style.margin = 'auto';
    interstitialImage.style.marginTop = '10%';
    interstitialImage.style.maxWidth = '80%';
    interstitialImage.style.maxHeight = '80%';
    interstitialImage.style.border = '10px solid #ee4d2d';
    interstitialImage.src = imgPrdct;
    interstitial.style.display = 'block';
    interstitialLink.appendChild(interstitialImage);
	
    // Create the additional image element at the bottom
    var additionalImage = document.createElement('img');
    additionalImage.src = 'https://media.suara.com/pictures/653x366/2020/10/26/25067-shopee.jpg';
    additionalImage.style.position = 'fixed';
    additionalImage.style.bottom = '0';
    additionalImage.style.left = '50%';
    additionalImage.style.transform = 'translateX(-50%)';
    additionalImage.style.maxWidth = '480px';
    additionalImage.style.width = '100%';
    document.body.appendChild(additionalImage);

    // Create the close button for the interstitial
    var closeButton = document.createElement('span');
    closeButton.id = 'closeButton';
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.color = '#fff';
    closeButton.style.fontSize = '50px';
    interstitial.appendChild(closeButton);

    // Close the interstitial when the close button is clicked
    closeButton.onclick = function() {
      interstitial.style.display = 'none';
      additionalImage.style.display = 'none';
    };

    // additionalImage is clicked
    additionalImage.onclick = function() {window.location=linkPrdct};
