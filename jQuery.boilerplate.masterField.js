/*
 * @version 0.1
 *
 * Created By Luis Eduardo Cardozo (https://github.com/luiscdz/MasterField.git)
 *
 */
var hola = 0;
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
			        this.jHijos   = this.jElement.children();
			        this.jHijos.each(function(index,obj){

			        					$(obj).attr('name','master-field-'+$(obj).attr('id'));
			        				});

			      	this.jHijos.addClass('simple-master-field'); 
			        this.jClon    = this.jElement.clone();
 _private.debug("---");
			        _private.debug(this.jClon);
_private.debug("---");

			        this.options = $.extend( {}, defaults, options ); // Clase para el manejo de las opciones.
					
			        this._defaults = defaults; // Opciones por defecto
			        this._name = pluginName; // Nombre del plugin
			        this.init();// Metodo Main

			    };

    /*Metodos publicos*/
    Plugin.prototype = {

        init: function() {

         			_private.formatear(this.jElement,this.jHijos, this.options); //Establecemos el formato
         			_private.eventAddElement(this.jElement,this.jClon,this.options);
         			_private.eventDeleteElement();
            
        },

        addElement: function() {

        		var data = {jClon:this.jClon,options:this.options};
        		var args = {data:data};
        		 _private.debug("/---add clone ----"); 
        	 	_private.crearObj(data.jClon);

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

						eventAddElement: function(jElement,jClon,options){

        					 	
					           var botonAdd    = '.add-master-field';
					           _private.debug("/---EvenrAdd clone ----");  
					           	hola++;
					           var data = {jClon:jClon,options:options};
   
						   	   jElement.on('click',botonAdd,data,_private.crearObj) ;

				       	},

				       	eventDeleteElement: function() {
       		
       		               	   var botonCancel = '.cancel-master-field';       		               	
						   	   $(document).on('click',botonCancel,_private.eliminaObj);

       					},

						formatear : function(jElement,jHijos,options) {
							 	  							
			   						jHijos.addClass('first-master-field');	   		 		   	
			   						var htmlInicial = jElement.html();
			   						var btnAdd =  '<span class="add-master-field"></span></div>';

			   						if ( typeof options.buttomAdd == "boolean"){

			   							if (options.buttomAdd == false){
			   								btnAdd = "";
			   							}

			   						}else{
			   							 _private.debug('buttomAdd: Esta propiedad debe ser un boolean');
			   						}

			   						var formato =   '<div class="container-master-field first-container-master-field">' + htmlInicial + btnAdd;
			   						jElement.html(formato);
						},

						crearObj : function(event) {

									
									var plugin = event.data;
									var  elementEvent = this;
									var jAddElement = $(elementEvent); 

									_private.debug("----crearobj----");
									_private.debug(plugin);
									hola = plugin;
									
									jPadreElement =  jAddElement.parent();
								   

									_private.debug(jAddElement.parent());
									

									cont = cont + 1;

									var jHijo = plugin.jClon.children();
									    jHijo.each(function(){
												var id = $(this).attr('id');
												$(this).attr('id',id+cont);
									});


									var btnAdd    = '<span class="add-master-field"></span>';
									var btnDelete = '<span class="cancel-master-field"></span>';


									if ( typeof  plugin.options.buttomAdd == "boolean" ){
											
											if(plugin.options.buttomAdd == false){
			   									btnAdd = "";
			   								}

			   						}else{
			   							 _private.debug('buttomAdd: Esta propiedad debe ser un boolean');
			   						}


			   						if ( typeof  plugin.options.buttomDelete == "boolean"){

			   								if(plugin.options.buttomDelete == false){
			   									btnDelete = "";
			   								}

			   						}else{
			   							 _private.debug('btnDelete: Esta propiedad debe ser un boolean');
			   						}


									var htmlInicial = plugin.jClon.html();
		   							var formato =   '<div  class="container-master-field">' + htmlInicial+btnDelete+ '</div>';
									i = jPadreElement.parent().append(formato);
									 _private.debug("---- clon listo ---")
			   						 _private.debug(i)
						},
						eliminaObj : function(event) {

							         
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


