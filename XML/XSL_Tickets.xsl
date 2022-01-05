<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
         <head />
         <body>
            <h1 style="text-align:center">Maintenance_and_Support</h1>
            <table border="2" align="center">
               <tr>
                  <th>Priority</th>
                  <th>Assigned_to</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Team_level</th>
                  <th>Affeted_users</th>
               </tr>
               <xsl:for-each select="PMS/Tickets">
                  <xsl:sort select="Date" />
                  <xsl:if test="Priority &gt; 2">
                     <tr>
                        <td>
                           <xsl:value-of select="Priority" />
                        </td>
                        <td>
                           <xsl:value-of select="Assigned_to" />
                        </td>
                        <td>
                           <xsl:value-of select="Date" />
                        </td>
                        <td>
                           <xsl:value-of select="Time" />
                        </td>
                        <td>
                           <xsl:value-of select="Status" />
                        </td>
                        <td>
                           <xsl:value-of select="Team_level" />
                        </td>
                        <td>
                           <xsl:value-of select="Affeted_users" />
                        </td>
                     </tr>
                  </xsl:if>
               </xsl:for-each>
            </table>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>