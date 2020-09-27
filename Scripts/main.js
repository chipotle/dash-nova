const keywordMap = {
  php:
    "php,wordpress,drupal,zend,laravel,yii,joomla,ee,codeigniter,cakephp,phpunit,symfony,typo3,twig,smarty,craft,phpp,html,statamic,mysql,sqlite,mongodb,psql,redis",
  javascript:
    "javascript,jquery,angular,angularjs,react,vue,backbone,meteor,moo,bootstrap,foundation,nodejs,coffee,express,require,html,css",
  html: "html,css,svg,bootstrap,foundation,javascript,jquery,angular,angularjs",
  ruby: "ruby,rubygems,rails",
  sql: "mysql,sqlite,psql",
  sass: "sass,compass,bourbon,neat,susy,css",
  scss: "sass,compass,bourbon,neat,susy,css",
  json: "javascript,json",
  perl: "perl,manpages",
  python: "python,django,twisted,sphinx,flask,tornado,sqlalchemy,numpy,scipy",
  erb: "ruby",
};

// Invoked by the "lookup" command

nova.commands.register("dash.lookup", (editor) => {
  if (editor.selectedRange.empty) {
    editor.selectWordsContainingCursors();
  }
  let lookupText = encodeURI(editor.selectedText);
  let syntax = editor.document.syntax;
  let keywords;
  if (syntax in keywordMap) {
    keywords = encodeURI(keywordMap[syntax]);
  } else {
    keywords = encodeURI(syntax);
  }

  let url = "dash-plugin://keys=" + keywords + "&query=" + lookupText;

  nova.openURL(url);
});
