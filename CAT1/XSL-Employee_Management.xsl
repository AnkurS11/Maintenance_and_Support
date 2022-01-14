<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
         <head>
	         <style>
		        table {
		            border-collapse: collapse;
		            width: 100%;
		        }
		          
		        th, td {
		            text-align: left;
		            padding: 8px;
		        }
		      
		    </style>
	    </head>
         <body>
            <h1 style="text-align:center">
               <u>Employee Management System</u>
            </h1>
            <table border="1" align="center" bgcolor="lightyellow">
               <tr bgcolor="lightblue">
                  <th>ID</th>
                  <th>NAME</th>
                  <th>AGE</th>
                  <th>SALARY</th>
                  <th>EMAIL</th>
                  <th>MobNum</th>
                  <th>Designation</th>
                  <th>Promotion</th>
               </tr>
               <xsl:for-each select="Company/Employee">
                  <xsl:sort select="Name" />
                  <tr>
                     <td>
                        <xsl:value-of select="@Emp_ID" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-name" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-age" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-salary" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-emailid" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-Phonenum" />
                     </td>
                     <td>
                        <xsl:value-of select="Emp-designation" />
                     </td>
                           			<xsl:choose>
						        <xsl:when test="Emp-age &gt;= 50">
						          <td>Associate Project Manager</td>
						        </xsl:when>
						        <xsl:when test="Emp-age &gt;= 40 and Emp-age &lt;= 49">
						          <td>Team Leader</td>
						        </xsl:when>
						        <xsl:when test="Emp-age &lt; 40">
						          <td>Developer</td>
						        </xsl:when>
						    </xsl:choose>
                    
                  </tr>
               </xsl:for-each>
            </table>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>
