## CRYPTX - EY - FINTECH

## ℹ️ Project information


 1. **Theme :**  FINTECH

2. **Project Name:** MOTOR CLAIMS AUTOMATION

3. **Short Project Description:** _Built a service that can automate verification of claim files including policy holder and vehicle details in multiple format  such as scanned documents and pictures  from claim surveyors_

4. **Team Name:** CRYPTX

5. **Team Members:** 
Sarthak Sadh: @sarthaksadh01

6. **Demo Links:** 
Live Site: http://motorclaims.azurewebsites.net
Test Data:http://bit.ly/all-in-one-hack

7. **Presentation Link:** _https://docs.google.com/presentation/d/11OsjiC4ccHKcgsNI5LyJG0VLfigwEYJoVaFq0y9m7uw/edit?usp=sharing_

11. **Azure Services Used-** 
Computer vision api 2.0  (ocr)
Azure file storage 
Azure Virtual Machine (Ubuntu)
 



## 🔥 Pitch

**Problem**
_The insurance industry runs on vast reservoirs of data, dealing with mixed data formats which include both paper and electronic documents. The manual effort to extract information from these documents and different data sources is not only considerable but also costly and prone to errors.._

**Solution**
_Intelligent automation can be used to quickly automate key processes to achieve higher efficiencies, streamline operational costs and reducing handling and cycle time of the claims processes._

**Key Features**
1. Automation of verification of all physical claim files.
2. Intelligent algorithm to extract & compare required fields.
3. Cross verification amongst all claim files within 20 seconds.
4. Mismatching of key values based on a threshold and not boolean true/false.
4. Different government document formats suported. 
5. Download results as an Excel sheet for future reference.
5. Cross Platform




 




## 🔦 Algorithm
1. To extract required keys from this raw data, we undertake the following steps :
* For DL number &  pan card number, since they have a predefined government approved format so we use Regex to extract them.
* For Vehicle number, we maintained a dataset of state Code and city code along with other criteria to extract information.
* For Policy holder name, we used Twitter API to train a ML model to identify valid names.
* For Claim number, since different companies have different formats hence we Reverse Searched the details from authoritative data.
* For Dates, we used moment.js to match dates in different format like(DD/MM/YY, YY/MM/DD….)

2. Our advanced comparison algorithm doesn’t only returns only boolean true or false instead it returns count of unmatched characters in both the strings.
Original Pan Number:     ABEPO73**5**6A
Extracted Pan Number:   ABEPO73**S**6A
Hence instead of returning false it will return (90% match)
3. This reduces time taken to verify claims by ~ **97%**
