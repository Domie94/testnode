SELECT
	AP_Office.off_id, 
	AP_Office.off_nm, 
	AP_Office.off_StrtL, 
	AP_Office.off_NoL, 
	AP_Office.Tel, 
	AP_Office.Fax, 
	AP_Office.Licen_Tax_Office, 
	AP_Office.licen_Tax, 
	AP_Users.Usr_id, 
	AP_Users.PWD
FROM
	dbo.AP_Office
	INNER JOIN
	dbo.AP_Users
	ON 
		AP_Office.off_id = AP_Users.Company
WHERE AP_Office.off_id =@CompanyId