#Архитектура проекта  

************************************************************************************  

###Проект лежит в папке app  

	| - Сборка проекта prepros
		| - JADE
		| - Stylus
		| - Спрайты собрал вручную, на проекте буду все собирать gulp'ом
		| - Мелочь в base64
	| - В корне папки node_modules и bower_components
####В question мои вопросы и предложения

************************************************************************************

###Менеджер пакетов Bower  

###Сборка проекта prepros  

	| - JADE
	| - Stylus
	| - Спрайты собрал вручную, на проекте буду все собирать gulp'ом
	| - Мелочь в base64

************************************************************************************

###Стили (stylus)  

	| - Исходники находятся в папке stylus, собирается в папку css
	| - В хедер страницы подключается 2 стиля: reset.css и main.css
		| - main.css собирается из управляющего стиля main.styl
			| - в него подключаются
				-	variables - переменные
				-	fonts - шрифты
				-	стили независимых блоков

************************************************************************************

###Верстка (JADE)  

	| - Исходники находятся в папке jade, блоки лежат в папке jade/include.jade собираются в index.html
		- index.jade
			- header.jade
				- menu.jade
			- content.jade
				- left.jade
				- public.jade
					-gallery.jade
			- footer.jade
##Надеюсь на сотрудничество!
