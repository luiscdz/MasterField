
;(function( $, window, document, undefined ) {


    // se crean opciones por defecto.
    var pluginName = "masterField";
        defaults = {
            		 	repeatElements: "", //No Implementado en esta versión
            		 	IdBoxNumberAdding : "", //No Implementado en esta versión
            		 	buttomAdd: true,
            		 	buttomDelete: true,
       			   };
    var cont = 0;
    // Metodo construcctor del Plugin
    var Plugin = function (element, options) {
        
			        this.element  = element; // Se matiene el HTML plano.
			        this.jElement = $(element); // Se convierte en un selector de jQuery y se le aniade un nuevo atributo.
			        this.jHijos   = this.jElement.children().attr('name','master-field-'+this.jElement.attr('id'));
			        this.jClon    = this.jElement.clone();

			        this.options = $.extend( {}, defaults, options ); // Clase para el manejo de las opciones.
					
			        this._defaults = defaults; // Opciones por defecto
			        this._name = pluginName; // Nombre del plugin

			       /* _private.debug("Elemento HTML:");
			        _private.debug(this.element);
			        _private.debug("Selector jQuery:");
          			_private.debug(this.jElement);
          			_private.debug("Hijos :");
          			_private.debug(this.jHijos);
          			_private.debug("jClon :");
          			_private.debug(this.jClon);*/

			        this.init();// Metodo Main
			    };

    /*Metodos publicos*/
    Plugin.prototype = {

        init: function() {

         			_private.formatear(this.jElement,this.jHijos, this.options); //Establecemos el formato
         			_private.eventAddElement(this.jClon,this.options);
         			_private.eventDeleteElement();
            
        },

        addElement: function() {

        		var data = {jClon:this.jClon,options:this.options};
        		var args = {data:data};
        	 	_private.crearObj(args);
        }
        
       	

    };

   /*Metodos privados*/       	
	var _private = {   
						

	 					debug : function(obj) {
								if (window.console && window.console.log){
									//window.console.log('Contador de selecciones: ' + $obj.size());
									window.console.log(obj);									
							    }
							},

						eventAddElement: function(jClon,options){

        					 	
					           var botonAdd    = '.add-master-field';
					           var data = {jClon:jClon,options:options};
						   	   $(document).on('click',botonAdd,data,_private.crearObj) ;

				       	},

				       	eventDeleteElement: function() {
       		
       		               	   var botonCancel = '.cancel-master-field';       		               	
						   	   $(document).on('click',botonCancel,_private.eliminaObj);

       					},

						formatear : function(jElement,jHijos,options) {
							 	  							
			   						jHijos.addClass('first-master-field simple-master-field');	   		 		   	
			   						var htmlInicial = jElement.html();
			   						var btnAdd =  '<span class="add-master-field"></span></div>';

			   						if ( typeof options.buttomAdd == "boolean" &&  options.buttomAdd == false){
			   							btnAdd = "";

			   						}else{
			   							 _private.debug('buttomAdd: Esta propiedad debe ser un boolean');
			   						}

			   						var formato =   '<div class="container-master-field">' + htmlInicial + btnAdd;
			   						jElement.html(formato);
						},

						crearObj : function(event) {

									var container = jQuery(".container-master-field ").children();

									var plugin = event.data;
									var  element = jQuery(this);
									var jAddElement =  element.length > 1? element:container.last();

									 _private.debug("jClon :");	
        					  		 _private.debug(plugin.jClon);	
        					   		 _private.debug("jElement :");	
        					  		 _private.debug( plugin.jElement);

        					  		 _private.debug(this);

									cont = cont + 1;
									var jHijo = plugin.jClon.children();
									    jHijo.each(function(){
												var id = $(this).attr('id');
												$(this).attr('id',id+cont);
									});


									var btnAdd = '<span class="add-master-field"></span>';
									var btnDelete = '<span class="cancel-master-field"></span>';


									if ( typeof  plugin.options.buttomAdd == "boolean" &&  plugin.options.buttomAdd == false){
			   							btnAdd = "";
			   						}else{
			   							 _private.debug('buttomAdd: Esta propiedad debe ser un boolean');
			   						}


			   						if ( typeof  plugin.options.buttomDelete == "boolean" &&  plugin.options.buttomDelete == false){
			   							btnDelete = "";

			   						}else{
			   							 _private.debug('btnDelete: Esta propiedad debe ser un boolean');
			   						}


									var htmlInicial = plugin.jClon.html();
		   							var formato =   '<div  class="container-master-field">' + htmlInicial +btnAdd+btnDelete+ '</div>';
									jAddElement.parent().after(formato);
			   						
						},
						eliminaObj : function(event) {

							         var plugin = event.data;
							         var campoCancel = $(this);
							         var padre = campoCancel.parent();

							         padre.remove();
							
						}

					}

    
    $.fn[pluginName] = function ( options ) {

        return this.each(function () {

            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }

        });

    };

})( jQuery, window, document );




















/*;(function($,window,document,undefined){


	$.masterField = function(element, options){

       
        var defaults = {
            foo: 'bar',
            onFoo: function() {},
            hola : 56
        }

 
        var plugin = this;
 
        plugin.settings = {}
 
        var $element = $(element);
             element = element;

 
        plugin.init = function() {

            plugin.settings = $.extend({}, defaults, options);

            _debug('settings: ');
            _debug(plugin.settings);
         
        }
 		
*/
 		 /*Metodos Publicos   
        plugin.public_method = function() {
           
           
        }
        

       /*Metodos Privados       	
       var 	_debug  = function(obj) {
										if (window.console && window.console.log){
											//window.console.log('Contador de selecciones: ' + $obj.size());
											window.console.log(obj);
											
									    }
									}

		
 
        plugin.init();
 
    }



	 $.fn.masterField = function(options) {
	 
	        // iterate through the DOM elements we are attaching the plugin to
	        return this.each(function() {
	 
	            // if plugin has not already been attached to the element
	            if (undefined == $(this).data('masterField')) {
	 
	                // create a new instance of the plugin
	                // pass the DOM element and the user-provided options as arguments
	                var plugin = new $.masterField(this, options);
	 
	                // in the jQuery version of the element
	                // store a reference to the plugin object
	                // you can later access the plugin and its methods and properties like
	                // element.data('pluginName').publicMethod(arg1, arg2, ... argn) or
	                // element.data('pluginName').settings.propertyName
	                $(this).data('masterField', plugin);
	 
	            }
	 
	        });
	 
	    }
})(jQuery,window,document);	    */