const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
allSideMenu.forEach(item=> {
	const li = iitem.parentElement;
	
	item.addEventListener('click',function (){
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
        })
		li.classList.add('active');
	})
});