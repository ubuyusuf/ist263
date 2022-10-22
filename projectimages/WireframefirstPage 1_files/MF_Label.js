function MF_Label(){var thisClass=this;thisClass.NAME="MF_Label";thisClass.LABEL="Label";thisClass.GENONLY=false;thisClass.TRANSFORM=false;thisClass.VRESIZE=false;thisClass.HRESIZE=false;thisClass.USEFONT=true;thisClass.ANNOTATION=false;thisClass.MULTILINE=false;thisClass.EDITABLE=true;thisClass.AUTOSIZE=false;thisClass.HIDE=true;thisClass.USEPAGE=true;thisClass.RENDER_ON_MOVE=false;thisClass.RENDER_ON_RESIZE=true;thisClass.RENDER=true;thisClass.ALLOW_MULTILINK=false;thisClass.CSSCOMP=true;thisClass.x=0;thisClass.y=0;thisClass.width=100;thisClass.height=40;thisClass.eangle=0;thisClass.eid="";thisClass.lid="";thisClass.transformLock=false;thisClass.e2xml=new MF_ComponentXML(this);thisClass.selector=null;thisClass.ecoordinates=null;thisClass.prevEcoordinates=null;thisClass.prevEsize=null;thisClass.esize=null;thisClass.GROUPID="";thisClass.delta=0;thisClass.linkType="";thisClass.link="";thisClass.linkObj=null;thisClass.templateID="";thisClass.fontType="sourcesanspro";thisClass.isGoogleFontUsed=false;thisClass.text="Label";thisClass.fontSize=12;thisClass.fontColor="#000000";thisClass.textAlign="left";thisClass.fontWeight="normal";thisClass.fontStyle="normal";thisClass.textDecoration="none";thisClass.icon="";thisClass.iconPlace="left";thisClass.cssJson="";thisClass.cssClasses=["text_css"];thisClass.cssObj=null;thisClass.setVisible=function(val){thisClass.visible=val;if(val){$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).hide();}};thisClass.getVisible=function(){return thisClass.visible;};thisClass.exml=function(){return thisClass.e2xml.formXML();};thisClass.setDefaultSettings=function(){thisClass.e2xml.addPropSingle("ANNOTATION",thisClass.ANNOTATION,"default");thisClass.e2xml.addPropSingle("text",thisClass.text,"default");thisClass.e2xml.addPropSingle("isGoogleFontUsed",thisClass.isGoogleFontUsed,"default");thisClass.e2xml.addPropSingle("textAlign",thisClass.textAlign,"default");thisClass.e2xml.addPropSingle("fontType",thisClass.fontType,"default");thisClass.e2xml.addPropSingle("fontSize",thisClass.fontSize,"default");thisClass.e2xml.addPropSingle("fontWeight",thisClass.fontWeight,"default");thisClass.e2xml.addPropSingle("fontStyle",thisClass.fontStyle,"default");thisClass.e2xml.addPropSingle("textDecoration",thisClass.textDecoration,"default");thisClass.e2xml.addPropSingle("fontColor",thisClass.fontColor,"default");thisClass.e2xml.addPropSingle("icon",thisClass.icon,"default");thisClass.e2xml.addPropSingle("iconPlace",thisClass.iconPlace,"default");};thisClass.getValues=function(){if(thisClass.e2xml.settings.properties.ANNOTATION!=null){thisClass.ANNOTATION=thisClass.e2xml.settings.properties.ANNOTATION;}if(thisClass.e2xml.settings.properties.cssJson!=null){thisClass.cssJson=thisClass.e2xml.settings.properties.cssJson;}if(thisClass.e2xml.settings.properties.icon!=null){thisClass.icon=thisClass.e2xml.settings.properties.icon;}if(thisClass.e2xml.settings.properties.iconPlace!=null){thisClass.iconPlace=thisClass.e2xml.settings.properties.iconPlace;}if(thisClass.e2xml.settings.properties.text!=null){thisClass.text=thisClass.e2xml.settings.properties.text;}if(thisClass.e2xml.settings.properties.fontWeight!=null){thisClass.fontWeight=thisClass.e2xml.settings.properties.fontWeight;}if(thisClass.e2xml.settings.properties.fontStyle!=null){thisClass.fontStyle=thisClass.e2xml.settings.properties.fontStyle;}if(thisClass.e2xml.settings.properties.textDecoration!=null){thisClass.textDecoration=thisClass.e2xml.settings.properties.textDecoration;}if(thisClass.e2xml.settings.properties.fontType!=null){thisClass.fontType=thisClass.e2xml.settings.properties.fontType;}if(thisClass.e2xml.settings.properties.textAlign!=null){thisClass.textAlign=thisClass.e2xml.settings.properties.textAlign;}if(thisClass.e2xml.settings.properties.isGoogleFontUsed!=null){thisClass.isGoogleFontUsed=thisClass.e2xml.settings.properties.isGoogleFontUsed;}if(thisClass.e2xml.settings.properties.fontSize!=null){thisClass.fontSize=thisClass.e2xml.settings.properties.fontSize;}if(thisClass.e2xml.settings.properties.fontColor!=null){thisClass.fontColor=thisClass.e2xml.settings.properties.fontColor;}};thisClass.render=function(redraw,mfpage){if(thisClass.GENONLY){return;}if(!thisClass.RENDER){return;}if(redraw==null){redraw=true;}MF_ComponentUtils.setDimensions(thisClass,thisClass.ecoordinates,thisClass.esize);thisClass.getValues();var rectCode="";var thickness=0;thisClass.delta=(1*thickness);var cwidth=thisClass.width+(thisClass.delta*2);var cheight=thisClass.height+(thisClass.delta*2);var ctop=thisClass.y-thisClass.delta;var cleft=thisClass.x-thisClass.delta;if(redraw){$("#"+thisClass.eid).remove();rectCode=rectCode+"<span class='mfWFCompCls text_css_"+thisClass.eid+"'  id=\""+thisClass.eid+'" style="pointer-events: none;  line-height: 100%; -webkit-transform: translateZ(0);  overflow: hidden; position:absolute; width:'+(cwidth).toString()+"px; height:"+(cheight).toString()+"px; top:"+(ctop).toString()+"px; left:"+(cleft).toString()+'px; padding: 5px; " > ';rectCode=rectCode+"</span>";if(mfpage){$("#mfPage"+mfpage.eid).append(rectCode);}else{$("#mfPage"+mf_main.editorController.page.eid).append(rectCode);}try{mf_main.editorController.postAddToPage(thisClass.eid);}catch(e){}}else{$("#"+thisClass.eid).css("left",cleft);$("#"+thisClass.eid).css("top",ctop);$("#"+thisClass.eid).css("width",cwidth);$("#"+thisClass.eid).css("height",cheight);}$("#"+thisClass.eid+"").css("user-select","none");$("#"+thisClass.eid+"").css("-webkit-user-select","none");$("#"+thisClass.eid+"").css("-moz-user-select","none");var fontFamily=mf_main.editorController.fontController.getFontByIDComponent(thisClass.fontType,thisClass);var htext=$("#"+thisClass.eid+"").html(thisClass.text).text();htext=MF_ComponentUtils.getRefactoredText(htext);if(thisClass.icon!=null&&thisClass.icon!=""){if(thisClass.iconPlace=="right"){htext=htext+" <i style='vertical-align: top; line-height: inherit;  display: inline-block;' class='"+thisClass.icon+"' ></i>";}else{htext="<i style='vertical-align: top; line-height: inherit;  display: inline-block;' class='"+thisClass.icon+"' ></i> "+htext;}}$("#"+thisClass.eid+"").html(htext);$("#"+thisClass.eid+"").css("font-family",fontFamily);$("#"+thisClass.eid).css("font-weight",thisClass.fontWeight);$("#"+thisClass.eid).css("font-style",thisClass.fontStyle);$("#"+thisClass.eid).css("text-decoration",thisClass.textDecoration);$("#"+thisClass.eid).css("font-size",thisClass.fontSize.toString()+"px");$("#"+thisClass.eid).css("color",thisClass.fontColor);$("#"+thisClass.eid).css("text-align",thisClass.textAlign);MF_Utils.rotate(thisClass.eid,thisClass.eangle);MF_ComponentUtils.applyCSS(thisClass);if(thisClass.selector){thisClass.selector.transform(thisClass);}};}function MF_LabelSettings(){var thisClass=this;thisClass.eid=mf_main.editorController.guidGenerator();thisClass.transformLock=false;thisClass.component=null;thisClass.selector=null;thisClass.RENDERDOM=true;thisClass.showSetting=true;thisClass.transformSettings=null;thisClass.linkSettings=null;thisClass.fontSettings=null;thisClass.iconSettings=null;thisClass.powerupSettings=null;thisClass.cssSettings=null;thisClass.themeSettings=null;thisClass.remove=function(delSet){$("#"+thisClass.eid).hide();if(delSet){try{if(mf_main.MEMFREE){if($("#mfLabelType_"+thisClass.eid).data("kendoDropDownList")){$("#mfLabelType_"+thisClass.eid).data("kendoDropDownList").destroy();}thisClass.transformSettings.remove();thisClass.linkSettings.remove();thisClass.fontSettings.remove();thisClass.iconSettings.remove();thisClass.powerupSettings.remove();thisClass.cssSettings.remove();thisClass.themeSettings.remove();}}catch(e){console.log("error occured in the component MF_Label.js");}$("#"+thisClass.eid).remove();}};thisClass.setValues=function(){if(thisClass.RENDERDOM){thisClass.render();thisClass.transformSettings=new MF_TransformSettings();thisClass.transformSettings.init(thisClass);thisClass.linkSettings=new MF_LinkSettings();thisClass.linkSettings.init(thisClass);thisClass.fontSettings=new MF_FontSettings2();thisClass.fontSettings.init(thisClass);thisClass.iconSettings=new MF_IconAssignSettings2();thisClass.iconSettings.init(thisClass);thisClass.powerupSettings=new MF_TextUtilitySettings();thisClass.powerupSettings.init(thisClass);thisClass.cssSettings=new MF_CSSSettings();thisClass.cssSettings.init(thisClass);thisClass.themeSettings=new MF_ThemeSettings();thisClass.themeSettings.init(thisClass);}else{thisClass.transformSettings.init(thisClass);thisClass.linkSettings.init(thisClass);thisClass.fontSettings.init(thisClass);thisClass.iconSettings.init(thisClass);thisClass.powerupSettings.init(thisClass);thisClass.themeSettings.init(thisClass);thisClass.cssSettings.init(thisClass);thisClass.setupEvents();$("#"+thisClass.eid).show();}};thisClass.updateTransform=function(noscale){thisClass.transformSettings.updateTransform(noscale);};thisClass.setupEvents=function(){if(thisClass.RENDERDOM){MF_ComponentSettingUtils.setupToggle(thisClass);$("#mfGenerateLorem_"+thisClass.eid).on("click",function(event){thisClass.component.e2xml.addPropSingle("text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat, sem sapien laoreet mauris, dictum porttitor lacus est nec enim. Vivamus feugiat elit lorem, eu porttitor ante ultrices id. Phasellus suscipit tellus ante, nec dignissim elit imperdiet nec. Nullam fringilla feugiat nisl. Ut pretium, metus venenatis dictum viverra, dui metus finibus enim, ac rhoncus sem lorem vitae mauris. Suspendisse ut venenatis libero. Suspendisse lorem felis, pretium in maximus id, tempor non ipsum");thisClass.component.render(false);});$("#mfLabelType_"+thisClass.eid).kendoDropDownList({select:onLabelTypeSelect});}if(thisClass.RENDERDOM==true){thisClass.RENDERDOM=false;}var dropdownlist3=$("#mfLabelType_"+thisClass.eid).data("kendoDropDownList");dropdownlist3.select(0);function onLabelTypeSelect(e){if(e.item.index()==0){return;}if(e.item.index()==1||e.item.index()==2||e.item.index()==3||e.item.index()==4){var undoarr=new Array();var undo2=new MF_UndoDAO();undo2.propSingleUndo(thisClass.component,"fontSize",thisClass.component.fontSize);undoarr.push(undo2);var fontSize=32;if(e.item.index()==1){fontSize=32;}if(e.item.index()==2){fontSize=24;}if(e.item.index()==3){fontSize=20;}if(e.item.index()==4){fontSize=16;}var cjson=MF_ComponentUtils.updateCSS(thisClass.component,["font-size"]);if(cjson!=""){MF_ComponentUtils.applyCSSPropSingle(thisClass,"fontSize",fontSize,cjson);}else{thisClass.component.e2xml.addPropSingle("fontSize",fontSize,"default");var undoObj=new MF_UndoDAO();var meta=new MF_MetaUndo(undoarr);undoObj.metaUndo(meta);MF_ChangeManager.addUndo(undoObj);thisClass.component.render(false);}}if(e.item.index()==5){var undoarr=new Array();var undo2=new MF_UndoDAO();undo2.propSingleUndo(thisClass.component,"fontColor",thisClass.component.fontColor);undoarr.push(undo2);undo2=new MF_UndoDAO();undo2.propSingleUndo(thisClass.component,"textDecoration",thisClass.component.textDecoration);undoarr.push(undo2);var cjson=MF_ComponentUtils.updateCSS(thisClass.component,["color","font-size","text-decoration"]);if(cjson!=""){undoarr=MF_ComponentUtils.addCSSUndo(thisClass.component,cjson,undoarr);}thisClass.component.e2xml.addPropSingle("fontColor","#0000ff","default");thisClass.component.e2xml.addPropSingle("textDecoration","underline","default");var undoObj=new MF_UndoDAO();var meta=new MF_MetaUndo(undoarr);undoObj.metaUndo(meta);MF_ChangeManager.addUndo(undoObj);thisClass.component.render(false);}mf_main.editorController.lastSetting=null;mf_main.editorController.openSetting(thisClass.component.selector);}};thisClass.render=function(redraw,mfpage){if(redraw==null){redraw=true;}var htmlCode="";if(redraw){$("#"+thisClass.eid).remove();htmlCode=multiline(function(){
/*!
				
					
					<div class="mfComponentSetting" id="{{eid}}" style=" position: relative; display: none; width:250px; height: 900px; overflow: hidden; " >
					<div  style="overflow: hidden;  width:100%; height: 100%;" >
					
						<div class="mfSettingsTextEditMsg" >
							Double-Click on Comp / Click Here to Edit
						</div>
					
						<div id="{{eid}}_transform"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						<div id="{{eid}}_link"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						<div id="{{eid}}_theme"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						<div id="{{eid}}_builtin"  style="overflow: hidden; width:100%; " >
					
								<div id="{{eid}}_settingToggle"  class="mfImgLink mfSettingsToggleBtn" style=" " >
				
									<div style="float: left; width: 185px; padding-left: 5px;">Label</div>
									
									<div style="float: left; width: 50px; text-align: right;">
										<span id="{{eid}}_settingToggleHide"  style="display: none; font-size: 20px;" class="ico-angle-right"></span>
										<span id="{{eid}}_settingToggleShow"  style="font-size: 20px;" class="ico-angle-down"></span>
									</div>
								</div>
										
								<div id="{{eid}}_partSetting" style="overflow: hidden; position: relative; width:100%; height: 60px;" >		
					
								
									
								<select style="left: 10px; top: 15px; width: 220px;" id="mfLabelType_{{eid}}">
								 <option selected>Apply Label Style</option>
								 <option>Heading 1</option>
								 <option>Heading 2</option>
								 <option>Heading 3</option>
								 <option>Heading 4</option>
								 <option>Link</option>
								</select>
								
								</div>
						</div>
						
						<div id="{{eid}}_font"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						
							<div id="{{eid}}_icon"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						<div id="{{eid}}_powerup"  style="overflow: hidden; width:100%; " >
							
						</div>
						
						<div id="{{eid}}_css"  style="overflow: hidden; width:100%; " >
							
						</div>
					
					
					</div></div>
					
				
				*/
console.log;});var compiled_template=Handlebars.compile(htmlCode);var context={eid:thisClass.eid};var compiled_code=compiled_template(context);$("#mfComponentSettings").append(compiled_code);thisClass.setupEvents();$("#"+thisClass.eid).show();}else{$("#"+thisClass.eid).css("left",thisClass.x);$("#"+thisClass.eid).css("top",thisClass.y);}};}