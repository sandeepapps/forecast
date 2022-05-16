/*
Author : Sandeep
LWC to display forecast data
*/
import { LightningElement,track } from 'lwc';

export default class ForecastTable extends LightningElement {
        @track displayData={};
        @track isMonths = true;
        @track isFull = false;
        
        @track headerData = [{column : "Product",classStyle : "fix"},{column : "Option"},{column : "Attribute"},{column : "Revenue Type"},{column : "QTY"},{column : "Unit Price"},{column : "Start Month"},{column : "Months"},{column : "Revenue Recognition"},{column : "Commited"},{column : "2019",isMonthsHeader : true},{column : "2020",isMonthsHeader : true},{column : "2021",isMonthsHeader : true}];
        summaryYears = {
            status: "success",
            responseData: {
                yearsData: [{
                        year: "2019",
                        summaryAmount: "$2,190.80",
                        lineData: [{
                                recordId: "a2m2G000000AJKQQA4",
                                amount: "$1,045.00"
                            },
                            {
                                recordId: "a2m2G000009H0fIQAS",
                                amount: "$1,100.00"
                            },
                            {
                                recordId: "a2m2G000009H0fHQAS",
                                amount: "$45.80"
                            }
                        ]
                    },
                    {
                        year: "2020",
                        summaryAmount: "$1,874.20",
                        lineData: [{
                                recordId: "a2m2G000000AJKQQA4",
                                amount: "$665.00"
                            },
                            {
                                recordId: "a2m2G000009H0fIQAS",
                                amount: "$1,200.00"
                            },
                            {
                                recordId: "a2m2G000009H0fHQAS",
                                amount: "$9.20"
                            }
                        ]
                    },
                    {
                        year: "2021",
                        summaryAmount: "$100.00",
                        lineData: [{
                            recordId: "a2m2G000009H0fIQAS",
                            amount: "$100.00"
                        }]
                    }
                ]
            },
            message: null
        };
        summaryMonths = {
            status: "success",
            responseData: {
                summaryAmount: [
                    "$195.00",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.58",
                    "$199.62",
                    "$195.00",
                    "$195.00",
                    "$195.00",
                    "$195.00",
                    "$100.00",
                    "$100.00",
                    "$100.00",
                    "$100.00",
                    "$100.00",
                    "$100.00"
                ],
                startYear: 2019,
                startMonth: 2,
                linesData: [{
                        startYear: 2019,
                        startMonth: 2,
                        recordId: "a2m2G000000AJKQQA4",
                        data: [
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00",
                            "$95.00"
                        ]
                    },
                    {
                        startYear: 2019,
                        startMonth: 2,
                        recordId: "a2m2G000009H0fIQAS",
                        data: [
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00",
                            "$100.00"
                        ]
                    },
                    {
                        startYear: 2019,
                        startMonth: 3,
                        recordId: "a2m2G000009H0fHQAS",
                        data: [
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.58",
                            "$4.62"
                        ]
                    }
                ]
            },
            message: null
        };

        value = 'View';
        // Method to display picklist values
        get options() {
            return [
                { label: 'View', value: 'view' },
                { label: 'Show full attributes', value: 'full' },
                { label: 'Show Monthly Summary', value: 'monthly' }
            ];
        }
    

        @track lineItemData = [{
            unitPrice: 95,
            startMonth: "2/1/2019",
            revenueType: "MRC",
            revenueRecognitionName: null,
            revenueRecognitionId: null,
            qty: 1,
            productItemName: "Captio User Delegation",
            productItemId: "a01A000001gmFXZIA2",
            productFLIId: "a2m2G000000AJKQQA4",
            priorMRR: null,
            optionItemName: null,
            optionItemId: null,
            optionFLIId: null,
            monthsVR: null,
            monthsNRC: null,
            monthsMRC: null,
            months: 18,
            displayUnitPrice: "$95.00",
            displayQty: "1",
            displayPriorMRR: null,
            committed: "No",
            attributesWithValues: null,
            attributes: null
        },
        {
            unitPrice: 55,
            startMonth: "3/1/2019",
            revenueType: "NRC",
            revenueRecognitionName: null,
            revenueRecognitionId: null,
            qty: 1,
            productItemName: "TNS Link",
            productItemId: "a01A000001utm3RIAQ",
            productFLIId: "a2m2G000009H0fHQAS",
            priorMRR: null,
            optionItemName: null,
            optionItemId: null,
            optionFLIId: null,
            monthsVR: null,
            monthsNRC: null,
            monthsMRC: null,
            months: 12,
            displayUnitPrice: "$55.00",
            displayQty: "1",
            displayPriorMRR: null,
            committed: "No",
            attributesWithValues: null,
            attributes: null
        },
        {
            unitPrice: 100,
            startMonth: "2/1/2019",
            revenueType: "MRC",
            revenueRecognitionName: null,
            revenueRecognitionId: null,
            qty: 1,
            productItemName: "TNS Link",
            productItemId: "a01A000001utm3RIAQ",
            productFLIId: "a2m2G000009H0fIQAS",
            priorMRR: null,
            optionItemName: null,
            optionItemId: null,
            optionFLIId: null,
            monthsVR: null,
            monthsNRC: null,
            monthsMRC: null,
            months: 24,
            displayUnitPrice: "$100.00",
            displayQty: "1",
            displayPriorMRR: null,
            committed: "No",
            attributesWithValues: null,
            attributes: null
        }
    ];
   
    // Function to listen picklist value changes
    handleChange(event) {
        this.value = event.detail.value;
        // When user select full data value in dropdown
        if(this.value == 'full'){
            this.isFull = true;
            this.isMonths = false;
            this.headerData.forEach((e) =>{
                if(!e.isMonthsHeader)
                    e.isDisplayRow = true;
                if(e.isMonthsHeader)
                    e.isDisplayRow = false;
           });            
        }       
        // When user select monthly data value in dropdown 
        else if(this.value == 'monthly'){
            this.isMonths = true;
            this.isFull = false;
            this.isMonthsHeader = true;
            this.headerData.forEach((e) =>{
                if(!e.isMonthsHeader && typeof e.isMonthsHeader != 'undefined')
                    e.isDisplayRow = false;
                if(e.isMonthsHeader)
                    e.isDisplayRow = true;
           });
        }
    }

    connectedCallback(){
        var dData = {};
        dData.values = [];
        let yearLines = [];
        // Split JSON Data 
        this.lineItemData = JSON.parse(JSON.stringify(this.lineItemData));
        const yearsData = this.summaryYears.responseData.yearsData;
        const monthsSumData = this.summaryMonths.responseData.summaryAmount;
        const monthsData = this.summaryMonths.responseData.linesData;

        yearsData.forEach(function(year){
            
            year.lineData.forEach(function(yearLine){
                let yData = {}
                yData['year'] = year.year;
                yData['summaryAmount'] = year.summaryAmount;
                yData['recordId'] = yearLine.recordId;
                yData['amount'] = yearLine.amount;
                yearLines.push(yData);
            });    
          
        });
        let yLines = JSON.parse(JSON.stringify(yearLines))

        // Header attributes
        this.headerData.forEach((e) =>{
                e.isDisplayRow = true;
        });
        
            
            let counter = 1;
            let yearNum = 2019;
            let monthLine = 0;
            // logic to iterate and add month values in table header
            while (counter < 13 && yearNum < 2022 && monthLine < monthsSumData.length) {
                monthLine = monthLine + 1 ;
                counter = (counter == 13 ) ? 1 :  counter + 1;
                if(typeof this.monthName(counter) != 'undefined'){
                    let col = {}
                    col['column'] = this.monthName(counter)+yearNum.toString();
                    col['isMonthsHeader'] = false;
                    this.headerData.push(col)
                }
                if(counter == 13){
                    counter = 0;
                    yearNum = yearNum + 1;
                } 
            }
        
      
        // logic to individual row 
        this.lineItemData.forEach(function(rec) 
        { 
            let jsonData = {};
            jsonData['Product']  = (rec.productItemName != 'undefined') ? rec.productItemName : '-';
            jsonData['Option']  = ( rec.optionItemName != null) ? rec.optionItemName : "--";
            jsonData['Attribute']  = (rec.attributes != null) ? rec.attributes : '--';
            jsonData['Revenue_Type']  = rec.revenueType;
            jsonData['QTY']  = rec.qty;
            jsonData['Unit_Price']  = rec.unitPrice;
            jsonData['Start_Month']  = rec.startMonth;
            jsonData['Months']  = rec.months;
            jsonData['Revenue_Recognition']  = (rec.revenueRecognitionName != null) ? rec.revenueRecognitionName : '--';;
            jsonData['Commited']  = rec.committed;
            jsonData['Id'] = rec.productFLIId; 
            // MONTHLY data 
            for(var i = 0 ; i< monthsData.length ; i ++){
                if(monthsData[i].recordId == rec.productFLIId){
                    for(var j = 0 ; j < monthsData[i].data.length ; j ++){
                        if(['line_'+j] == 'line_1' && monthsData[i].startMonth == 3) 
                            jsonData['line_'+j] = 0
                        else
                            jsonData['line_'+j] = monthsData[i].data[j];

                    }
                }
            }
            // yearly data 
            let yearRecordLine = yLines.reduce(function (acc,el)
            {
                
                if(el.recordId == rec.productFLIId && el.year == '2019'){
                    acc['amount_2019'] = el.amount ;
                }
                if(el.recordId == rec.productFLIId && el.year == '2020'){
                    acc['amount_2020'] = el.amount ;
                }
                if(el.recordId == rec.productFLIId && el.year == '2021'){
                    acc['amount_2021'] = el.amount ;
                }
                
                return acc;

            },{'amount_2019':0 ,'amount_2020':0 ,'amount_2021':0  });
            jsonData = {...jsonData,...yearRecordLine};
           
            dData.values.push(jsonData);
        });
            // Summary data for years
            var summaryRecordLine = yLines.reduce(function (acc,el)
            {
                
                if(el.year == '2019'){
                    acc['amount_2019'] = el.summaryAmount ;
                }
                if(el.year == '2020'){
                    acc['amount_2020'] = el.summaryAmount ;
                }
                if(el.year == '2021'){
                    acc['amount_2021'] = el.summaryAmount ;
                }
                
                return acc;

            },{'amount_2019':0 ,'amount_2020':0 ,'amount_2021':0  });
            // Summary data for months
            for(let i = 0 ; i < monthsSumData.length ; i++){
                summaryRecordLine['line_'+(i+1)] = monthsSumData[i]; 
            }

        dData.values.push(summaryRecordLine);
        this.displayData = JSON.parse(JSON.stringify(dData));
        console.log('displaydata ',this.displayData)
    }
    //get month name
    monthName(mon) {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][mon - 1];
    }
     
}