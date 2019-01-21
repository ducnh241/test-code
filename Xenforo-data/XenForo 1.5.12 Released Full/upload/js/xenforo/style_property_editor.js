/*
 * XenForo style_property_editor.min.js
 * Copyright 2010-2017 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
(function(b,g,h){XenForo.StylePropertyForm=function(c){c.bind("submit",function(){var a=b("#propertyTabs").data("XenForo.Tabs"),d=a.getCurrentTab(),a=a.api.getCurrentTab().closest("li.PropertyTab");c.find("input[name=tab_index]").val(d);c.find("input[name=tab_id]").val(a.attr("id"));var d=c.serialize(),e=c.find("input:not(input[type=hidden]), select, textarea"),f=b('<input type="hidden" name="_xfStylePropertiesData" />');e.each(function(){var a=b(this);a.data("attr-name",a.attr("name"));a.removeAttr("name")});
f.val(d).appendTo(c);setTimeout(function(){e.each(function(){var a=b(this);a.attr("name",a.data("attr-name"))});f.remove()},100)});location.hash&&(location.hash.indexOf("#tab-")==0?b("#propertyTabs").data("XenForo.Tabs").click(parseInt(location.hash.substr(5),10)):b("#propertyTabs").data("XenForo.Tabs").click(b("#propertyTabs > li").index(h.getElementById(location.hash.substr(1)))))};XenForo.StylePropertyEditor=function(c){c.find(".TextDecoration input:checkbox").click(function(a){a=b(a.target);console.log("Text-decoration checkbox - Value=%s, Checked=%s",
a.attr("value"),a.is(":checked"));a.is(":checkbox")||a.prop("checked",!a.is(":checked"));a.is(":checked")&&(a.attr("value")=="none"?b(this).not('[value="none"]').prop("checked",!1):b(this).filter('[value="none"]').prop("checked",!1))})};XenForo.StylePropertyTooltip=function(c){if(!(b(g).width()<800)){var a=c.find("div.DescriptionTip").addClass("xenTooltip propertyDescriptionTip").appendTo("body").append('<span class="arrow" />');a.length&&c.tooltip(XenForo.configureTooltipRtl({position:"bottom left",
offset:[-24,-6],tip:a,delay:0}))}};XenForo.register("#PropertyForm","XenForo.StylePropertyForm");XenForo.register(".StylePropertyEditor","XenForo.StylePropertyEditor");XenForo.register("#propertyTabs > li","XenForo.StylePropertyTooltip")})(jQuery,this,document);
