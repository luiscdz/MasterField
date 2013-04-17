(function($){


	$.fn.masterField = function(opt){
	   
		// Opciones Por defecto el plugin
		var defaults = 	{
							numberRepet : 5
						}; 


		// Esto permitira combinar las opciones por defecto con las opciones dadas por el usuario					
		var settings = {};				
	   

	     // Métodos públicos
         // Para mantener el espacio de nombres $.fn ordenado, recoger toda la
         // De los métodos del plugin en un objeto literal y la llamada
         // Ellos pasando el nombre de la cadena del método para el plugin

         // Métodos públicos pueden ser llamados como nombrePlugin  $ (selector).('nombreMetodo', arg1, arg2, ... argn)
         // Donde "nombrePlugin" es el nombre del plugin y "nombreMetodo" es el nombre de una función disponible en
         // la seccion "methods" más adelante;
         // Arg1 ... argn son argumentos que se pasan al método
         
         // O, desde dentro del propio plugin, como
         // Methods.nombreMetodo (arg1, arg2, ... argn)
         // Donde "nombreMetodo" es el nombre de una función disponible
         // en el objeto "Methods"

	    var options = $.extend({}, $.fn.masterField.defaults, opt); 

	    args = Array.prototype.slice.call(arguments, 1);

	    debug(args);

	    if (typeof options == 'string') {

        }
	   	var jThis = this; //elemento o elementos seleccionados
	   	 // se clona el objeto seleccionado

	   	jThis.each(function(index,obj){


	   		/*Seleccion elemento, crea su contenedor y le asigno una clase*/
	   			var jObject = $(obj)
	   			var jClones = jObject.children().attr('name','master-field').clone();
	   				jObject.children().addClass('first-master-field simple-master-field');

	   		 		   	
	   			var htmlInicial = jObject.html();
	   			var formato =  $.fn.masterField.format(htmlInicial);
	   			
	   			jObject.html(formato);


	   		/*Eventos*/
	   			
	   			botonAdd    = $('.add-master-field');
	   			botonCancel = 	$('.cancel-master-field');




	   	});



    /*Funciones Privadas*/ 

	   
	     

	};


	function debug($obj) {
		if (window.console && window.console.log){
			//window.console.log('Contador de selecciones: ' + $obj.size());
			window.console.log($obj);
			
	    }
	}

	$.fn.masterField.format = function(markup) {
	 		return '<div id="container-mfield" class="container-master-field">' + markup + '<span class="add-master-field"></span></div>';
	};


	$.fn.masterField.defaults = {
		numberRepet : '5'
	}

	

})(jQuery);