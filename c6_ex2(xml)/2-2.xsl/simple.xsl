<?xml version="1.0" encoding="UTF-8"?>
<html xsl:version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <body style="font-family:Arial;font-size:12pt;background-color:#1f1f1f">
    <xsl:for-each select="breakfast_menu/food">
      <div style="background-color:#878787;color:white;padding:4px">
        <span style="font-weight:bold"><xsl:value-of select="name"/> ===> </span>
        <xsl:value-of select="price"/>
      </div>
      <div style="margin-left:20px;margin-bottom:1em;font-size:10pt;color:d5d5d5;background-color:#3c3c3c">
        <p>
        <xsl:value-of select="description"/>
        <span style="font-style:italic"> (<xsl:value-of select="calories"/> calories per serving)</span>
        </p>
      </div>
    </xsl:for-each>
  </body>
</html>
