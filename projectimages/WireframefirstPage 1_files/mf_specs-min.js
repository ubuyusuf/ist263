function MF_SpecController(){var thisClass=this;this.cacheSpecSheet=new Object();this.currentComponent=null;this.currentSelectedID=null;this.lastSpec=null;this.specControllerOpened=false;this.cacheSpecs=new Object();this.constructor=function(){$(window).on("resize",function(){if(thisClass.specControllerOpened){thisClass.resize();}});$("#mfSpecModePowerupList .mfSpecPowerupBtn").on("click",thisClass.selectPowerup);thisClass.resize();if(mf_main.PUBLIC||mf_main.INTEGRATION){$(".mfPowerupPopupBtn").remove();}};this.setMode=function(){thisClass.currentComponent=null;thisClass.specControllerOpened=true;$("#mfComponentSpecs").hide();$("#mfSpecPowerupList").show();for(var k=0;k<mf_main.editorController.loadedPages.length;k++){var page=mf_main.editorController.loadedPages[k];for(var i=0;i<page.childComponents.size();i++){var component=page.childComponents.getItemAt(i);if(component.NAME=="MF_Hotspot"){$("#"+component.eid).hide();component.selector.setVisible(false);}else{if(component.selector){component.selector.setVisible(true);}}}for(var n in page.groupManager.groupSelectors){var gselector=page.groupManager.groupSelectors[n];if(gselector){gselector.setVisible(false);}}}$(".mfCompSelectorCls").css("pointer-events","auto");$(".mfCompSelectorCls").on("mouseout",thisClass.internalSpecSelectModeOut);$(".mfCompSelectorCls").on("mouseup",thisClass.internalSpecSelectModeUp);$(".mfCompSelectorCls").on("mouseover",thisClass.internalSpecSelectModeOver);$("#mfSpecModePowerupList .mfSpecPowerupBtn").off("click",thisClass.selectPowerup);$("#mfSpecModePowerupList .mfSpecPowerupBtn").on("click",thisClass.selectPowerup);};this.internalSpecSelectModeUp=function(e){if(mf_main.editorController.SPECMODE){for(var k=0;k<mf_main.editorController.loadedPages.length;k++){var page=mf_main.editorController.loadedPages[k];if(page){var selector=page.getSelector($(this).attr("id"));if(selector&&selector.component){$(".mfCompSelectorCls").css("border","none");$(this).css("border","2px solid #E91E63");thisClass.currentSelectedID=$(this).attr("id");thisClass.currentComponent=selector.component;thisClass.openSpecSheet();break;}}}}};this.internalSpecSelectModeOver=function(e){if(mf_main.editorController.SPECMODE){$(this).css("border","2px solid #E91E63");}};this.internalSpecSelectModeOut=function(e){if(mf_main.editorController.SPECMODE){if(thisClass.currentSelectedID==$(this).attr("id")){}else{$(this).css("border","none");}}};this.openSpecSheet=function(){if(thisClass.currentComponent){if(thisClass.lastSpec&&thisClass.lastSpec.component.eid==thisClass.currentComponent.eid){return;}if(!thisClass.cacheSpecSheet[thisClass.currentComponent.NAME]){$(".mfSpecListScreenCls").hide();$("#mfSpecLoadingScreen").show();var comppath=MF_Global.getSpecPath();try{MF_Utils.loadsScripts([comppath+thisClass.currentComponent.NAME+".js"]).then(function(script,textStatus){$(".mfSpecListScreenCls").hide();$("#mfSpecMainScreen").show();try{var specsName=thisClass.currentComponent.NAME+"Specs";specs=new window[specsName]();thisClass.cacheSpecSheet[thisClass.currentComponent.NAME]=specs;thisClass.lastSpec=specs;thisClass.invokeComponentSpecs();}catch(e){}}).fail(function(script,textStatus){$(".mfSpecListScreenCls").hide();$("#mfSpecMainScreen").show();});}catch(e){$(".mfSpecListScreenCls").hide();$("#mfSpecMainScreen").show();}}else{thisClass.lastSpec=thisClass.cacheSpecSheet[thisClass.currentComponent.NAME];thisClass.invokeComponentSpecs();}}};this.invokeComponentSpecs=function(){$(".mfSpecListScreenCls").hide();$("#mfSpecMainScreen").show();$("#mfSpecPowerupList").hide();$("#mfComponentSpecs").show();thisClass.lastSpec.component=thisClass.currentComponent;thisClass.lastSpec.setValues();$("#mfComponentSpecs").scrollTop(0);};this.unsetMode=function(){if(!thisClass.specControllerOpened){return;}thisClass.specControllerOpened=false;thisClass.currentComponent=null;thisClass.lastSpec=null;$("#mfComponentSpecs").html("");$("#mfComponentSpecs").hide();$("#mfSpecPowerupList").show();$(".mfCompSelectorCls").css("border","none");$(".mfCompSelectorCls").off("mouseup",thisClass.internalSpecSelectModeUp);$(".mfCompSelectorCls").off("mouseover",thisClass.internalSpecSelectModeOver);$(".mfCompSelectorCls").off("mouseout",thisClass.internalSpecSelectModeOut);for(var k=0;k<mf_main.editorController.loadedPages.length;k++){var page=mf_main.editorController.loadedPages[k];for(var i=0;i<page.childComponents.size();i++){var component=page.childComponents.getItemAt(i);if(component.NAME=="MF_Hotspot"){$("#"+component.eid).show();component.selector.setVisible(true);}}for(var n in page.groupManager.groupSelectors){var gselector=page.groupManager.groupSelectors[n];if(gselector){gselector.setVisible(true);}}}mf_main.editorController.toggleLinks();};this.resize=function(){$("#mfComponentSpecs,#mfSpecPowerupList").height($("#mfViewerContentSpecs").height()-70);};this.selectPowerup=function(){var pid=$(this).attr("data-powerupid");mf_main.editorController.powerupController.openPowerupbyID(pid);};}function MF_CodeSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="CodeSpecs";thisClass.specsHolder=null;thisClass.cssCode="";thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);$("#"+thisClass.eid+"_cssSpec").html(thisClass.specsHolder.getCSSCode()+MF_ComponentUtils.getCSSCode(thisClass.specsHolder.component));$("#"+thisClass.eid+"_copyCss").off("click");$("#"+thisClass.eid+"_copyCss").on("click",function(e){MF_Utils.copyToClipBoard3(thisClass.eid+"_cssSpec");});};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">CSS</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%; padding-bottom: 20px; padding-top: 10px; padding-left: 10px; padding-right: 10px;word-break: break-word; " >		

				<div id="{{eid}}_cssSpec" style="background: #F5F5F5; padding: 10px;  width: 220px;  ">
				 
				</div>
				
				<i id="{{eid}}_copyCss" style="cursor: pointer; font-size: 14px; color: #444; position: absolute; top: 20px; left: 205px;" class="ico-copy2"></i>
			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_code").empty();$("#"+thisClass.specsHolder.eid+"_code").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_ColorSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="ColorSpecs";thisClass.specsHolder=null;thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);$("#"+thisClass.eid+"_partSpec").html("");for(var m=0;m<thisClass.specsHolder.colorArray.length;m++){var colorObj=thisClass.specsHolder.colorArray[m];$("#"+thisClass.eid+"_partSpec").append('<div style="padding: 5px 10px; height: 40px; width: 230px; vertical-align: middle;"><div style="float: left; width: 100px;"><div style="float: left; width: 30px; height: 30px; border-radius: 30px; background: '+colorObj.value+'; border: 1px solid #ccc;"></div> <div style="width: 60px; height: 30px; float: right; margin-top: 6px;">'+colorObj.value+'</div> </div><div style="float: right; text-align: right; width: 100px; margin-top: 6px;">'+colorObj.style+"</div></div>");}};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Colors</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%; padding-top: 10px; " >		


			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_colors").empty();$("#"+thisClass.specsHolder.eid+"_colors").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_FontSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="FontSpecs";thisClass.specsHolder=null;thisClass.fontFamily="";thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);thisClass.fontFamily=mf_main.editorController.fontController.getFontByIDComponent(thisClass.specsHolder.component.fontType,thisClass.specsHolder.component);$("#mfFontFamily_"+thisClass.eid).html(thisClass.fontFamily);$("#mfFontFamily_"+thisClass.eid).css("font-family",thisClass.fontFamily);$("#mfFontStyle_"+thisClass.eid).css("font-family",thisClass.fontFamily);if(thisClass.specsHolder.component.isGoogleFontUsed){$("#mfGoogleFont_"+thisClass.eid).show();}$("#mfGoogleFont_"+thisClass.eid).on("click",function(event){window.open("https://fonts.google.com/?query="+thisClass.fontFamily);});};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Font</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:220px; padding-top: 20px; padding-left: 10px; padding-right: 0px; padding-bottom: 20px; " >		

				
				<div id="mfFontFamily_{{eid}}"  style="color: #666; font-size:20px;" >
				
				</div>
				
				<div id="mfGoogleFont_{{eid}}"  style="cursor: pointer; display: none; color: #2196F3; font-size:12px;" >
				 Open Google Font
				</div>
				
				<div  id="mfFontStyle_{{eid}}"style="color: #666; padding-top: 20px; font-size:12px;" >
				
					<span  style="font-weight: 200;">Light</span> &nbsp; &nbsp;
					<span  style="font-weight: 400;">Regular</span> &nbsp; &nbsp;
					<span  style="font-weight: 700;">Bold</span>
				</div>
			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_font").empty();$("#"+thisClass.specsHolder.eid+"_font").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_TransformSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.transformLock=false;thisClass.NAME="TransformSpecs";thisClass.x=0;thisClass.y=0;thisClass.specsHolder=null;thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);$("#x_"+thisClass.eid).text(Math.round(thisClass.specsHolder.component.ecoordinates.x));$("#y_"+thisClass.eid).text(Math.round(thisClass.specsHolder.component.ecoordinates.y));$("#w_"+thisClass.eid).text(Math.round(thisClass.specsHolder.component.esize.width));$("#h_"+thisClass.eid).text(Math.round(thisClass.specsHolder.component.esize.height));};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Transform</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%; height: 80px; font-size: 13px;" >		

			
				<div style="position: absolute; left: 10px; top: 20px;">X: <span style="width: 70px;"  id="x_{{eid}}"></span>px</div>
	
				<div style="position: absolute; left: 10px; top: 50px;">Y: <span style="width: 70px;"  id="y_{{eid}}"></span>px</div>
	
				<div style="position: absolute; left: 110px; top: 20px;">Width: &nbsp;<span style="width: 70px;"  id="w_{{eid}}"></span>px</div>
	
				<div style="position: absolute; left: 110px; top: 50px;">Height: <span style="width: 70px;"  id="h_{{eid}}"></span>px</div>
	
			
			
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_transform").empty();$("#"+thisClass.specsHolder.eid+"_transform").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_ImageContentSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="ImageContentSpecs";thisClass.specsHolder=null;thisClass.imageURL="";thisClass.base64Data=null;thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;if(thisClass.specsHolder.component.imageID!=""){thisClass.render();}MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);if(thisClass.specsHolder.component.NAME=="MF_Draw"){$("#"+thisClass.eid+"_imagecontentSrc").attr("src",thisClass.specsHolder.component.dataUrl);$("#"+thisClass.eid+"_imagecontentSpec").on("click",function(){var u=thisClass.specsHolder.component.dataUrl;var image=new Image();image.src=u;var w=window.open("");w.document.write(image.outerHTML);});$("#"+thisClass.eid+"_imagecontentDownload").on("click",function(){var u=thisClass.specsHolder.component.dataUrl;var image=new Image();image.src=u;var w=window.open("");w.document.write(image.outerHTML);});}else{thisClass.imageURL="https://s3.amazonaws.com/"+MF_Global.getS3Bucket()+"/app/wireframepro/company/"+mf_main.editorController.projectObj.company+"/projects/"+mf_main.editorController.projectObj.id+"/images/"+thisClass.specsHolder.component.imageID;if(mf_main.editorController.imageController.base64CacheCollection.hasOwnProperty(thisClass.specsHolder.component.imageID)){thisClass.base64Data=mf_main.editorController.imageController.base64CacheCollection[thisClass.specsHolder.component.imageID];}if(thisClass.specsHolder.component.imageID!=""&&thisClass.base64Data==null){$("#"+thisClass.eid+"_imagecontentSrc").attr("src",thisClass.imageURL);}if(thisClass.specsHolder.component.imageID!=""&&thisClass.base64Data!=null){$("#"+thisClass.eid+"_imagecontentSrc").attr("src",thisClass.base64Data);}$("#"+thisClass.eid+"_imagecontentSpec").on("click",function(){window.open(thisClass.imageURL);});$("#"+thisClass.eid+"_imagecontentDownload").on("click",function(){window.open(thisClass.imageURL);});var image=new Image();image.onload=function(){var colorThief=new ColorThief();var colorarr=colorThief.getPalette(image,5);var count=1;for(var k=0;k<colorarr.length;k++){var cc=colorarr[k];var cval="rgb("+cc[0]+", "+cc[1]+", "+cc[2]+")";var hexcolor=MF_Utils.RGBToHex(cval.toString());var color=new Object();color.style="Color  "+count;color.value=hexcolor;thisClass.specsHolder.colorArray.push(color);count++;}thisClass.specsHolder.colorSpec.init(thisClass.specsHolder);};if(thisClass.base64Data!=null){image.src=thisClass.base64Data;}else{image.src="imageproxy.jsp?url="+thisClass.imageURL;}}};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Image</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%;  padding-bottom: 20px; padding-top: 10px; padding-left: 10px; padding-right: 10px; " >		

					<div id="{{eid}}_imagecontentSpec" style="background: linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), rgb(255, 255, 255); background-position: 0 0, 20px 20px; background-origin: padding-box; background-clip: border-box; background-size: 40px 40px; padding: 10px;  width: 220px; overflow: hidden; cursor: pointer; text-align: center; height: 220px; line-height: 200px; ">
				 
				 		<img id="{{eid}}_imagecontentSrc" src='' alt='' style='max-width: 100%;  max-height: 100%; height: auto;  cursor: pointer;' />
					</div>
					
					<div id="{{eid}}_imagecontentDownload" style="cursor: pointer; color: #2196F3; padding-top: 10px;">Download Image</div>
			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_imagecontent").empty();$("#"+thisClass.specsHolder.eid+"_imagecontent").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_TextContentSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="TextContentSpecs";thisClass.specsHolder=null;thisClass.content="";thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);$("#"+thisClass.eid+"_contentSpec").html(thisClass.specsHolder.getContent());};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Content</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%;  padding-bottom: 20px; padding-top: 10px; padding-left: 10px; padding-right: 10px; word-break: break-word;" >		

				<div id="{{eid}}_contentSpec" style="border: 1px solid #f0f0f0; padding: 10px;  width: 220px;  ">
				 
				</div>
			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_textcontent").empty();$("#"+thisClass.specsHolder.eid+"_textcontent").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_SVGContentSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="SVGContentSpecs";thisClass.specsHolder=null;thisClass.SVGUrl="";thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);if(MF_Global.getS3Bucket()=="assets.mockflow.com"){thisClass.SVGUrl=MF_Global.getS3CdnURL()+"app/wireframepro/svg/"+thisClass.specsHolder.component.SVGUrl;}else{thisClass.SVGUrl="https://s3.amazonaws.com/"+MF_Global.getS3Bucket()+"/app/wireframepro/svg/"+thisClass.specsHolder.component.SVGUrl;}$("#"+thisClass.eid+"_svgcontentSrc").attr("src",thisClass.SVGUrl);$("#"+thisClass.eid+"_svgcontentSpec").on("click",function(){window.open(thisClass.SVGUrl);});$("#"+thisClass.eid+"_svgcontentDownload").on("click",function(){window.open(thisClass.SVGUrl);});};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">SVG</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%;  padding-bottom: 20px; padding-top: 10px; padding-left: 10px; padding-right: 10px; " >		

					<div id="{{eid}}_svgcontentSpec" style="background: linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), linear-gradient(45deg, rgba(0,0,0,0.0980392) 25%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.0980392) 75%, rgba(0,0,0,0.0980392) 0), rgb(255, 255, 255); background-position: 0 0, 20px 20px; background-origin: padding-box; background-clip: border-box; background-size: 40px 40px; padding: 10px;  width: 220px; overflow: hidden; cursor: pointer; text-align: center; height: 220px; line-height: 200px; ">
				 
				 		<img id="{{eid}}_svgcontentSrc" src='' alt='' style='max-width: 100%;  max-height: 100%; height: auto;  cursor: pointer;' />
					</div>
					
					<div id="{{eid}}_svgcontentDownload" style="cursor: pointer; color: #2196F3; padding-top: 10px;">Download SVG</div>
			
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_svgcontent").empty();$("#"+thisClass.specsHolder.eid+"_svgcontent").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}function MF_GridHTMLSpecs(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.NAME="GridHTMLSpecs";thisClass.specsHolder=null;thisClass.cssCode="";thisClass.showSpec=true;thisClass.remove=function(){$("#"+thisClass.eid).remove();};thisClass.init=function(specsHolder){thisClass.specsHolder=specsHolder;thisClass.render();MF_ComponentSettingUtils.rememberSpecToggle(thisClass);};thisClass.setupEvents=function(){MF_ComponentSettingUtils.setupSpecToggle(thisClass);$("#"+thisClass.eid+"_gridhtmlSpec").text(thisClass.specsHolder.getHTMLCode());$("#"+thisClass.eid+"_downloadHTML").on("click",thisClass.downloadHTML);};thisClass.downloadHTML=function(){var htmlSnippet=thisClass.specsHolder.getHTMLCode();var filename="wireframepro-gridbuilder-"+thisClass.eid+".html";var blob=new Blob([htmlSnippet],{type:"text/csv"});if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveBlob(blob,filename);}else{var element=window.document.createElement("a");element.href=window.URL.createObjectURL(blob);element.download=filename;document.body.appendChild(element);element.click();document.body.removeChild(element);}};thisClass.render=function(redraw){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
			
			<div id="{{eid}}_specToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
					<div style="float: left; width: 185px; padding-left: 5px;">Layout HTML</div>
					
					<div style="float: left; width: 50px; text-align: right;">
						<span id="{{eid}}_specToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
						<span id="{{eid}}_specToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
					</div>
			</div>
						
			<div id="{{eid}}_partSpec" style="overflow: hidden; position: relative; width:100%; padding-bottom: 20px; padding-top: 10px; padding-left: 10px; padding-right: 10px; " >		

				<div id="{{eid}}_gridhtmlSpec" style="background: #F5F5F5; padding: 10px;  width: 230px;  ">
				 
				</div>
			
				<div id="{{eid}}_downloadHTML" style="font-size: 14px; color: #1F96F3; cursor: pointer; display: inline-block; margin: 10px 0px;">Download as HTML</div>
				
			</div>
			
			*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#"+thisClass.specsHolder.eid+"_gridhtml").empty();$("#"+thisClass.specsHolder.eid+"_gridhtml").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}