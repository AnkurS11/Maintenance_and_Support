<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
   <xsl:template match="/">
      <html>
         <head />
         <body>
            <h1 style="text-align:center"><u>Maintenance_and_Support</u></h1>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Tickets</b></caption>
               <tr bgcolor= "lightblue">
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
                           <xsl:choose>
						        <xsl:when test="Team_level = 1">
						          <td bgcolor="#ffff66">
						          <xsl:value-of select="Team_level" /></td>
						        </xsl:when>
						        <xsl:when test="Team_level = 2">
						          <td bgcolor="#e6e600">
						          <xsl:value-of select="Team_level" /></td>
						        </xsl:when>
						        <xsl:when test="Team_level = 3">
						          <td bgcolor="#ffffb3">
						          <xsl:value-of select="Team_level" /></td>
						        </xsl:when>
						        <xsl:otherwise>
						          <td bgcolor="#999900">
						          <xsl:value-of select="Team_level" /></td>
						        </xsl:otherwise>
						    </xsl:choose>
                        <td>
                           <xsl:value-of select="Affected_users" />
                        </td>
                     </tr>
                  </xsl:if>
               </xsl:for-each>
            </table>
            <br/>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Teams</b></caption>
               <tr bgcolor= "lightblue">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Technology</th>
                  <th>Location</th>
                  <th>Team_level</th>
               </tr>
               <xsl:for-each select="PMS/Technical_Team">
                  <xsl:sort select="Name" />
                     <tr>
                        <td>
                           <xsl:value-of select="Name" />
                        </td>
                        <td>
                           <xsl:value-of select="Email" />
                        </td>
                        <td>
                           <xsl:value-of select="Technology" />
                        </td>
                        <td>
                           <xsl:value-of select="Location" />
                        </td>
                        <td>
                           <xsl:value-of select="Team_level" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table>
            <br/>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Projects</b></caption>
               <tr bgcolor= "lightblue">
                  <th>Name</th>
                  <th>Client</th>
                  <th>Start_date</th>
                  <th>End_date</th>
                  <th>Teams</th>
               </tr>
               <xsl:for-each select="PMS/Projects">
                  <xsl:sort select="Name" />
                     <tr>
                        <td>
                           <xsl:value-of select="Name" />
                        </td>
                        <td>
                           <xsl:value-of select="Client" />
                        </td>
                        <td>
                           <xsl:value-of select="Start_Date" />
                        </td>
                        <td>
                           <xsl:value-of select="End_Date" />
                        </td>
                        <td>
                           <xsl:value-of select="Teams" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table>
            <br/>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Affected_user</b></caption>
               <tr bgcolor= "lightblue">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Technology</th>
                  <th>Location</th>
                  <th>Team_level</th>
               </tr>
               <xsl:for-each select="PMS/Affected_user">
                  <xsl:sort select="Name" />
                     <tr>
                        <td>
                           <xsl:value-of select="Name" />
                        </td>
                        <td>
                           <xsl:value-of select="Address" />
                        </td>
                        <td>
                           <xsl:value-of select="Project" />
                        </td>
                        <td>
                           <xsl:value-of select="Issue" />
                        </td>
                        <td>
                           <xsl:value-of select="Ticket_no" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table>
            <br/>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Team_Report</b></caption>
               <tr bgcolor= "lightblue">
                  <th>Team_ID</th>
                  <th>Name</th>
                  <th>From_date</th>
                  <th>To_date</th>
                  <th>Resolutions</th>
                  <th>Email</th>
                  <th>Hours</th>
               </tr>
               <xsl:for-each select="PMS/Team_Report">
                  <xsl:sort select="Name" />
                     <tr>
                     	<td>
                           <xsl:value-of select="Team_ID" />
                        </td>
                        <td>
                           <xsl:value-of select="Name" />
                        </td>
                        <td>
                           <xsl:value-of select="From_Date" />
                        </td>
                        <td>
                           <xsl:value-of select="To_Date" />
                        </td>
                        <td>
                           <xsl:value-of select="Resolutions" />
                        </td>
                        <td>
                           <xsl:value-of select="Email" />
                        </td>
                        <td>
                           <xsl:value-of select="Hours" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table><br/>
            <br/>
            <table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Manager</b></caption>
               <tr bgcolor= "lightblue">
                  <th>F_Name</th>
                  <th>L_Name</th>
                  <th>Address</th>
                  <th>Experience</th>
                  <th>Project_ID</th>
               </tr>
               <xsl:for-each select="PMS/Manager">
                  <xsl:sort select="F_Name" />
                     <tr>
                        <td>
                           <xsl:value-of select="F_Name" />
                        </td>
						<td>
                           <xsl:value-of select="L_Name" />
                        </td> 
                        <td>
                           <xsl:value-of select="Address" />
                        </td>
                        
                        <td>
                           <xsl:value-of select="Experience" />
                        </td>
                        <td>
                           <xsl:value-of select="Project_ID" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table>
            <br/>
			<table border="2" align="center" bgcolor = "lightyellow">
               <caption><b>Documents</b></caption>
               <tr bgcolor= "lightblue">
                  <th>Team_ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Author</th>
                  <th>Pages</th>
               </tr>
               <xsl:for-each select="PMS/Documents">
                  <xsl:sort select="Title" />
                     <tr>
                        <td>
                           <xsl:value-of select="Team_ID" />
                        </td>
						<td>
                           <xsl:value-of select="Title" />
                        </td> 
                        <td>
                           <xsl:value-of select="Date" />
                        </td>                       
                        <td>
                           <xsl:value-of select="Author" />
                        </td>
                        
                        <td>
                           <xsl:value-of select="Pages" />
                        </td>
                     </tr>
               </xsl:for-each>
            </table>            
            <div align="center">
		  		<h2><u>The Ticket Info.</u></h2>
	            <xsl:apply-templates select="PMS/Tickets"/>  
            </div>
            
         </body>
      </html>
      
   </xsl:template>
   
    <xsl:template match="Tickets">
	  <p>
	  <xsl:apply-templates select="Assigned_to"/>
	  <xsl:apply-templates select="Status"/>
	  </p>
	</xsl:template>
	
	<xsl:template match="Assigned_to"><div align="center">
	  Ticket is Assigned_to: <span style="color:#ff0000">
	  <xsl:value-of select="."/></span>
	  </div>
	</xsl:template>
	
	<xsl:template match="Status"><div align="center">
	  Status: <span style="color:#00ff00">
	  <xsl:value-of select="."/></span>
	  </div><br/>
	</xsl:template>

</xsl:stylesheet>