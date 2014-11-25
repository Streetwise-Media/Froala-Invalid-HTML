# Froala Invalid HTML Plugin

This plugin allows you to specify invalid HTML in the Froala WYSIWYG editor, including invalid/disallowed HTML tags and attributes. Froala offers the `allowedTags` and `allowedAttrs` options, but what if you only want to disallow one tag or one attribute? Currently with Froala's JavaScript, you would have to type out all of their `allowedTags` (there are 108 currently) except the one you don't want. With this plugin, you simply specify the `invalidTags` and `invalidAttrs` options.

Just register the JavaScript on your website:

```
<!-- Register jQuery and Froala editor JavaScript here -->
<script src="js/plugins/invalid_html.js"></script>
```

Then when you initialize the editor, use the `invalidTags` and `invalidAttrs` options:

```
$('#selector').editable({
	inlineMode: false,
	invalidTags: ['style'],
	invalidAttrs: ['style']
});
```

Note: There is a bug with Froala v1.2.3 (and possibly earlier versions) that prevents tags from being stripped properly from the HTML. Version 1.2.4 fixes this issue.
