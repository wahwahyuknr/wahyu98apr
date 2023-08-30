      // Create interstitial
        const interstitial = document.createElement('div');
        interstitial.className = 'interstitial';
        
        // Create close button container
        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.className = 'close-button-container';
        
        // Create promo label
        const promoLabel = document.createElement('div');
        promoLabel.className = 'promo-label';
        promoLabel.textContent = 'Promo Obral Murah';
        
        // Create close button
        const closeButton = document.createElement('button');
        closeButton.className = 'close-button';
        closeButton.id = 'closeButton';
        closeButton.textContent = 'Close';
        
        // Append promo label and close button to close button container
        closeButtonContainer.appendChild(promoLabel);
        closeButtonContainer.appendChild(closeButton);
        
        // Create scrollable container
        const scrollableContainer = document.createElement('div');
        scrollableContainer.className = 'scrollable-container';
        scrollableContainer.id = 'dataContainer';
        
        // Append close button container and scrollable container to interstitial
        interstitial.appendChild(closeButtonContainer);
        interstitial.appendChild(scrollableContainer);
        
        // Append interstitial to body
        document.body.appendChild(interstitial);  
    
    
    
    
        // URL of the JSON data
        const url = 'https://wahyu98apr.github.io/shopee.json';



        // Open the interstitial
        interstitial.style.display = 'flex';

        // Fetch JSON data using the fetch() API
        fetch(url)
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                // Randomly shuffle the data array
                const shuffledData = data.sort(() => 0.5 - Math.random());

                // Select the first 4 items from the shuffled array
                const selectedItems = shuffledData.slice(0, 20);

                // Create a card for each selected data item
selectedItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
		<a class="lProd" href="${item.LinkKomisiEkstra}" target="_blank">
			<img class="product-image" src="${item.Image}" alt="${item.NamaProduk}" title="${item.NamaProduk}">
			<div class="product-details">
				<p> ${item.NamaProduk}</p>
				<p class="harga"> ${item.Harga}</p>
				<p> ${item.NamaToko}</p>
            
 
			</div>
		</a>
    `;
    dataContainer.appendChild(card);
});

                
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
                dataContainer.textContent = 'Error fetching JSON data';
            });

        // Close the interstitial when the close button is clicked
        closeButton.addEventListener('click', () => {
            interstitial.style.display = 'none';
        });
