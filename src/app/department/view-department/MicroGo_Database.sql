INSERT INTO Parent_Data(
    [Parent_Data_Id], [S_No], [TIMESTAMP],[U_ID], [Company_Name], [Mobile], [Email_ID], [PASSWORD], [LOCATION],[Local_IP],[Profile_Type]
)
VALUES
(1,1,21/09/2020,'Jagruti123','MicroGo',1234567890,'jagruti@gmail.com',56767675,'Gujarat,India','0.01.34.56.78','Admin')
GO
-- Query the total count of employees
SELECT COUNT(*) as Parent_Data_Count FROM dbo.Parent_Data;
-- Query all employee information
SELECT e.Parent_Data_Id, e.S_No, e.TIMESTAMP, e.U_ID, e.Company_Name, e.Mobile, e.Email_ID, e.[PASSWORD], e.[LOCATION],e.Local_IP, e.Profile_Type
FROM dbo.Parent_Data as e
GO

