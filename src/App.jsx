import { useEffect, useState } from 'react'
import './App.css'
import { IconBxRefresh } from './components/IconBxRefresh';

function App() {
  const [data, setData] = useState([
    {
      "id": 1,
      "eventDate": "2024-06-07T18:52:18.2304027+00:00",
      "eventType": "",
      "senderAs2Id": "AS2Sender",
      "receiverAs2Id": "AS2Receiver",
      "messageId": "8ae57a58-0d01-4cd8-82e3-714eaea4d37a",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": "sync",
      "status": "pending",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 2,
      "eventDate": "2024-06-08T15:05:43.9423582-05:00",
      "eventType": "Inbound",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_030543Sat>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Sent",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 3,
      "eventDate": "2024-06-08T15:18:08.3930595-05:00",
      "eventType": "Inbound",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_031808Sat>",
      "payload": "requestContainer.Content",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Sent",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 5,
      "eventDate": "2024-06-08T15:37:34.5292483-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelsontestAS2",
      "messageId": "3784cbe3-7375-49a4-92ce-1532a2e2ea85",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 6,
      "eventDate": "2024-06-08T15:46:09.490696-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelsontestAS2",
      "messageId": "ce93fedb-69f3-4193-ac70-ca25261a2c63",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 7,
      "eventDate": "2024-06-08T15:46:28.5197731-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelsontestAS2",
      "messageId": "ea290872-2817-4149-84b3-982465fdab76",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 8,
      "eventDate": "2024-06-08T15:50:34.9279135-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelsontestAS2",
      "messageId": "<AS2_035027Sat>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 10,
      "eventDate": "2024-06-08T18:30:18.721079-05:00",
      "eventType": "Receive",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_063018Sat>",
      "payload": "POST / HTTP/1.1\r\nHost: example.com\r\nAS2-Version: 1.1\r\nAS2-To: 123456789\r\nAS2-From: 987654321\r\nMessage-ID: 20240527123456789@example.com\r\nContent-Type: multipart/signed; protocol=\"application/pkcs7-signature\"; micalg=sha1; boundary=\"----=_Part_0_123456789.987654321\"\r\nMIME-Version: 1.0\r\nContent-Length: 1234\r\n        \r\n------=_Part_0_123456789.987654321\r\nContent-Type: application/EDI-Consent; name=\"smime.p7m\"\r\nContent-Transfer-Encoding: base64\r\n        \r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvKJg/1V2Zf1v2D2B1DQF...\r\n------=_Part_0_123456789.987654321--",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 11,
      "eventDate": "2024-06-08T20:26:58.9979814-05:00",
      "eventType": "Receive",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_082641Sat>",
      "payload": "POST / HTTP/1.1\r\nHost: example.com\r\nAS2-Version: 1.1\r\nAS2-To: 123456789\r\nAS2-From: 987654321\r\nMessage-ID: 20240527123456789@example.com\r\nContent-Type: multipart/signed; protocol=\"application/pkcs7-signature\"; micalg=sha1; boundary=\"----=_Part_0_123456789.987654321\"\r\nMIME-Version: 1.0\r\nContent-Length: 1234\r\n        \r\n------=_Part_0_123456789.987654321\r\nContent-Type: application/EDI-Consent; name=\"smime.p7m\"\r\nContent-Transfer-Encoding: base64\r\n        \r\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvKJg/1V2Zf1v2D2B1DQF...\r\n------=_Part_0_123456789.987654321--",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 17,
      "eventDate": "2024-06-09T21:54:22.8472904-05:00",
      "eventType": "Receive",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_095422Sun>",
      "payload": "------=_Part_12345_67890.abcdef123456\r\nContent-Type: application/edi-x12\r\nContent-Transfer-Encoding: binary\r\nContent-Disposition: attachment; filename=\"order.edi\"\r\n\r\n<?xml version=\"1.0\"?>\r\n<catalog>\r\n   <book id=\"bk101\">\r\n      <author>Gambardella, Matthew</author>\r\n   </book>\r\n</catalog>\r\n\r\n------=_Part_12345_67890.abcdef123456\r\nContent-Type: application/pkcs7-signature; name=\"smime.p7s\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"smime.p7s\"\r\n\r\nMIIB8AYJKoZIhvcNAQcCoIIB4TCCAe0CAQExDjAMBggqhkiG9w0CBQUApXkdoCOKQnm5LQeFNsO+gg==\r\n------=_Part_12345_67890.abcdef123456--\r\n",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 18,
      "eventDate": "2024-06-09T22:42:23.5404827-05:00",
      "eventType": "Receive",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_104223Sun>",
      "payload": "------=_Part_12345_67890.abcdef123456\r\nContent-Type: application/edi-x12\r\nContent-Transfer-Encoding: binary\r\nContent-Disposition: attachment; filename=\"order.edi\"\r\n\r\n<?xml version=\"1.0\"?>\r\n<catalog>\r\n   <book id=\"bk101\">\r\n      <author>Gambardella, Matthew</author>\r\n   </book>\r\n</catalog>\r\n\r\n------=_Part_12345_67890.abcdef123456\r\nContent-Type: application/pkcs7-signature; name=\"smime.p7s\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"smime.p7s\"\r\n\r\nMIIB8AYJKoZIhvcNAQcCoIIB4TCCAe0CAQExDjAMBggqhkiG9w0CBQUApXkdoCOKQnm5LQeFNsO+gg==\r\n------=_Part_12345_67890.abcdef123456--\r\n",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 20,
      "eventDate": "2024-06-12T14:37:40.8299043-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-6/12/2024 7:37:38 PM>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 21,
      "eventDate": "2024-06-12T14:40:06.8899913-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 22,
      "eventDate": "2024-06-12T14:40:47.3339993-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 23,
      "eventDate": "2024-06-12T14:41:13.7655028-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 24,
      "eventDate": "2024-06-12T14:53:37.3518648-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 25,
      "eventDate": "2024-06-12T14:54:15.6159464-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 26,
      "eventDate": "2024-06-12T14:54:54.1724725-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 27,
      "eventDate": "2024-06-12T15:01:19.9660077-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 28,
      "eventDate": "2024-06-12T15:04:30.7057994-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 29,
      "eventDate": "2024-06-12T15:12:51.5127592-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 30,
      "eventDate": "2024-06-12T16:04:55.1078048-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "string",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 31,
      "eventDate": "2024-06-12T16:05:01.606538-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 32,
      "eventDate": "2024-06-12T16:06:51.8675926-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 33,
      "eventDate": "2024-06-12T16:08:29.1601295-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 34,
      "eventDate": "2024-06-12T16:09:10.6208875-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "MIDEA",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 35,
      "eventDate": "2024-06-12T16:10:01.8782933-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-6/12/2024 9:09:51 PM>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 36,
      "eventDate": "2024-06-12T16:13:41.7584038-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-6/12/2024 9:13:05 PM>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 37,
      "eventDate": "2024-06-12T16:13:55.0009637-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "Trading partner profile not found",
      "details": null
    },
    {
      "id": 38,
      "eventDate": "2024-06-12T16:23:10.8198993-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "Local profile not found",
      "details": null
    },
    {
      "id": 39,
      "eventDate": "2024-06-12T16:24:49.9025156-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "Trading partner profile not found",
      "details": null
    },
    {
      "id": 40,
      "eventDate": "2024-06-12T16:25:11.6901046-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-20242512>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 41,
      "eventDate": "2024-06-12T16:25:42.1606937-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "MIDEA",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "Error encoding message: Cannot create CMS signature for empty content.",
      "details": null
    },
    {
      "id": 42,
      "eventDate": "2024-06-12T16:29:18.3698845-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-20242912>",
      "payload": "D94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg=",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "Value cannot be null. (Parameter 'content')",
      "details": null
    },
    {
      "id": 43,
      "eventDate": "2024-06-12T16:30:59.3588251-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "MIDEA",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "SendEdiAs2 Process] - Error decoding base64 string",
      "details": null
    },
    {
      "id": 44,
      "eventDate": "2024-06-12T16:43:59.3981926-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-20240612094356>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 45,
      "eventDate": "2024-06-12T22:25:13.101238-05:00",
      "eventType": "Send",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "string",
      "messageId": "",
      "payload": "",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Error",
      "eventMessage": "A network-related or instance-specific error occurred while establishing a connection to SQL Server. The server was not found or was not accessible. Verify that the instance name is correct and that SQL Server is configured to allow remote connections. (provider: Named Pipes Provider, error: 40 - Could not open a connection to SQL Server)",
      "details": null
    },
    {
      "id": 46,
      "eventDate": "2024-06-17T06:17:22.0127771-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2-20240617111706>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 47,
      "eventDate": "2024-06-17T06:19:07.8360636-05:00",
      "eventType": "Send",
      "senderAs2Id": "mycompanyAS2",
      "receiverAs2Id": "Midea",
      "messageId": "<AS2-20240617111802>",
      "payload": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48TU1lc3NhZ2U+PFRyYW5zYWN0aW9uSGVhZGVyPjxTZW5kZXI+U1RSSzwvU2VuZGVyPjxSZWNlaXZlcj5NaWRlYTwvUmVjZWl2ZXI+PENyZWF0aW9uRGF0ZXRpbWU+MjAyNC0wNi0wNVQyMTowNjoxMTwvQ3JlYXRpb25EYXRldGltZT48TWVzc2FnZVR5cGU+OTQ0PC9NZXNzYWdlVHlwZT48TWVzc2FnZVN0YXR1cz4wPC9NZXNzYWdlU3RhdHVzPjxWZXJzaW9uPjEuMDwvVmVyc2lvbj48RG9jdW1lbnRJZD5TVlNIRFJTVFJLV0hMT0cwMDAwMDAzNjIzPC9Eb2N1bWVudElkPjxVc2FnZUluZGljYXRvcj5UPC9Vc2FnZUluZGljYXRvcj48L1RyYW5zYWN0aW9uSGVhZGVyPjxUcmFuc2FjdGlvbkRldGFpbD48V2FyZWhvdXNlUmVjZWlwdEFkdmljZUhlYWRlcj48U2hpcG1lbnRJZGVudGlmaWNhdGlvbj5UMDAxLTAwMDAwMTE2PC9TaGlwbWVudElkZW50aWZpY2F0aW9uPjxEb2N1bWVudFR5cGU+TkFDPC9Eb2N1bWVudFR5cGU+PFNoaXBtZW50RGF0ZT4yMDI0LTA1LTMwPC9TaGlwbWVudERhdGU+PENvbnRhaW5lck51bWJlcj5MVDAwMS0wMDAwMDExNzwvQ29udGFpbmVyTnVtYmVyPjxPcmRlck51bWJlcj48L09yZGVyTnVtYmVyPjxBZGRyZXNzPjxBZGRyZXNzVHlwZUNvZGU+V0g8L0FkZHJlc3NUeXBlQ29kZT48QWRkcmVzc0xvY2F0aW9uTnVtYmVyPlMvTjwvQWRkcmVzc0xvY2F0aW9uTnVtYmVyPjxBZGRyZXNzTmFtZT5DYW1pbm8gQSBUZWNsYSBTL04gVGVvbG9wYXJrPC9BZGRyZXNzTmFtZT48QWRkcmVzczE+UGFycXVlIEluZHVzdHJpYWwgVGVvbG9wYXJrPC9BZGRyZXNzMT48QWRkcmVzczI+PC9BZGRyZXNzMj48Q2l0eT5UZW9sb3l1Y2FuPC9DaXR5PjxTdGF0ZT5Fc3RhZG8gZGUgTWV4aWNvPC9TdGF0ZT48UG9zdGFsQ29kZT41NDc4NjwvUG9zdGFsQ29kZT48Q291bnRyeT5NWDwvQ291bnRyeT48L0FkZHJlc3M+PC9XYXJlaG91c2VSZWNlaXB0QWR2aWNlSGVhZGVyPjxXYXJlaG91c2VSZWNlaXB0QWR2aWNlTGluZT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4xPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNDQxPC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT4xNTA8L1F0eT48V2FyZWhvdXNlQ29kZT5TVFJLPC9XYXJlaG91c2VDb2RlPjxRdHlSZWNlaXZlZFVPTT5VTklUUzwvUXR5UmVjZWl2ZWRVT00+PFRyYW5zYWN0aW9uSUQ+PC9UcmFuc2FjdGlvbklEPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMDwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjxMaW5lSXRlbT48TGluZVNlcXVlbmNlTnVtYmVyPjI8L0xpbmVTZXF1ZW5jZU51bWJlcj48VmVuZG9yUGFydE51bWJlcj42MDA3MTM8L1ZlbmRvclBhcnROdW1iZXI+PE5hbWVUeXBlPlN0YW5kYXJkPC9OYW1lVHlwZT48TG90TnVtPjwvTG90TnVtPjxDdXN0b21zQ2xlYXJhbmNlRGF0ZT4yMDI0LTA1LTMwPC9DdXN0b21zQ2xlYXJhbmNlRGF0ZT48Q3VzdG9tc05hbWU+PC9DdXN0b21zTmFtZT48UXR5PjkwPC9RdHk+PFdhcmVob3VzZUNvZGU+U1RSSzwvV2FyZWhvdXNlQ29kZT48UXR5UmVjZWl2ZWRVT00+VU5JVFM8L1F0eVJlY2VpdmVkVU9NPjxUcmFuc2FjdGlvbklEPjwvVHJhbnNhY3Rpb25JRD48QmFyQ29kZXM+PFNOPjEyMzQ1NjAwMDA8L1NOPjwvQmFyQ29kZXM+PC9MaW5lSXRlbT48TGluZUl0ZW0+PExpbmVTZXF1ZW5jZU51bWJlcj4zPC9MaW5lU2VxdWVuY2VOdW1iZXI+PFZlbmRvclBhcnROdW1iZXI+NjAwNzI4PC9WZW5kb3JQYXJ0TnVtYmVyPjxOYW1lVHlwZT5TdGFuZGFyZDwvTmFtZVR5cGU+PExvdE51bT48L0xvdE51bT48Q3VzdG9tc0NsZWFyYW5jZURhdGU+MjAyNC0wNS0zMDwvQ3VzdG9tc0NsZWFyYW5jZURhdGU+PEN1c3RvbXNOYW1lPjwvQ3VzdG9tc05hbWU+PFF0eT40MDwvUXR5PjxXYXJlaG91c2VDb2RlPlNUUks8L1dhcmVob3VzZUNvZGU+PFF0eVJlY2VpdmVkVU9NPlVOSVRTPC9RdHlSZWNlaXZlZFVPTT48VHJhbnNhY3Rpb25JRD48L1RyYW5zYWN0aW9uSUQ+PEJhckNvZGVzPjxTTj4xMjM0NTYwMDAxPC9TTj48L0JhckNvZGVzPjxCYXJDb2Rlcz48U04+MTIzNDU2MDAwMTwvU04+PC9CYXJDb2Rlcz48L0xpbmVJdGVtPjwvV2FyZWhvdXNlUmVjZWlwdEFkdmljZUxpbmU+PC9UcmFuc2FjdGlvbkRldGFpbD48L01NZXNzYWdlPg==",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    },
    {
      "id": 49,
      "eventDate": "2024-06-17T06:24:23.678671-05:00",
      "eventType": "Receive",
      "senderAs2Id": "contrans",
      "receiverAs2Id": "mendelson",
      "messageId": "<AS2_062421Mon>",
      "payload": "<?xml version=\"1.0\"?>\r\n<catalog>\r\n   <book id=\"bk101\">\r\n      <author>Gambardella, Matthew</author>\r\n   </book>\r\n</catalog>\r\n",
      "isEncrypted": false,
      "isSigned": false,
      "mdnMode": null,
      "status": "Ok",
      "eventMessage": null,
      "details": null
    }
  ])
  const [formValues, setFormValues] = useState(
    {
      as2From: null,
      fromDate: null,
      toDate: null,
      eventType: null,
      displayOk: true,
      displayFailed: true
    })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    const dateOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    };

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDate = date.toLocaleDateString('es-ES', dateOptions);
    const formattedTime = date.toLocaleTimeString('es-ES', timeOptions);

    return `${formattedDate}, ${formattedTime}`;
  }

  const fetchData = (payload) => {
    setLoading(true)
    fetch('https://testingas2.azurewebsites.net/TransmissionLog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if(response.status === 204) return []
      return response.json()
    })
    .then(data => {
      setData(data)
    })
    .catch((e) => {
      console.log(e)
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    fetchData(formValues)
  }

  const onChange = (e) => {
    let newValue
    if(e.target.name === 'as2From') {
      if(e.target.value && e.target.value.trim()!== ""){
        newValue = {
          ...formValues,
          [e.target.name]: e.target.value
        }
      } else {
        newValue = {
          ...formValues,
          [e.target.name]: null
        }
      }
      setFormValues(newValue)
    } else if(e.target.name.includes("Date")) {
      if(e.target.value){
        newValue = {
          ...formValues,
          [e.target.name]: new Date(e.target.value).toISOString()
        }
      }else{
        newValue = {
          ...formValues,
          [e.target.name]: null
        }
      }
      setFormValues(newValue)
      fetchData(newValue)
    } else if(e.target.checked !== undefined) {
      const newValue = {
        ...formValues,
        [e.target.name]: e.target.checked
      }
      setFormValues(newValue)
      fetchData(newValue)
    } else {
      newValue = {
        ...formValues,
        [e.target.name]: e.target.value === 'Todos' ? null : e.target.value
      }
      setFormValues(newValue)
      fetchData(newValue)
    }
  }

  useEffect(() => {
    fetchData(formValues)
  },[])

  return (
    <main>
      <form
        onSubmit={onSubmit}
        onChange={onChange}
        style={{display: 'flex', gap: 20}}
      >
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button style={{width: 100, height: 60}} disabled={loading}>
            <IconBxRefresh fill="green" height="2em" width="2em"/>
            <p style={{fontSize: 16}}>Refrescar</p>
          </button>
        </div>
        <div style={{display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(235px, 1fr))', flex: 1}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-around'}}>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Remitente:</p>
              <input name='as2From' style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}/>
            </label>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Tipo de Evento:</p>
              <select name='eventType' style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading} defaultValue='Todos'>
                <option value='Send'>Envío</option>
                <option value='Receive'>Recepción</option>
                <option value='Todos'>Todos</option>
              </select>
            </label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'space-around'}}>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Fecha Hasta:</p>
              <input type='date' name='toDate' onClick={(e) => {e.target.showPicker()}} style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}></input>
            </label>
            <label style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <p>Fecha Desde:</p>
              <input type='date' name='fromDate' onClick={(e) => {e.target.showPicker()}} style={{height: 30, paddingLeft: 5, flex: 1}} disabled={loading}></input>
            </label>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
            <label style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <input type='checkbox' name='displayOk' style={{height: 20, width: 20}} disabled={loading} defaultChecked></input>
              <div style={{width: 15, height: 15, display: 'inline-block', backgroundColor: 'green'}}></div><p>Mostrar Ok</p>
            </label>
            <label style={{display: 'flex', gap: 5, alignItems: 'center'}}>
              <input type='checkbox' name='displayFailed' style={{height: 20, width: 20}} disabled={loading} defaultChecked></input>
              <div style={{width: 15, height: 15, display: 'inline-block', backgroundColor: 'red'}}></div>
              <p>Mostrar Fallidos</p>
            </label>
          </div>
        </div>
      </form>
      <section>
        <div className='table-wrapper'>
          <table style={{width: '100%', borderCollapse: "collapse"}}>
            <thead style={{backgroundColor: "#F3F3F3", height: 40}}>
              <tr>
                <th>Status</th>
                <th style={{width: 165}}>Timestamp</th>
                <th>Local</th>
                <th>Remoto</th>
                <th>ID Mensaje</th>
                <th>Payload</th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><div className='spinner'></div></td></tr> :
                error ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><strong>Ocurrió un error</strong></td></tr> :
                data.length === 0 ? <tr><td colSpan="100%" style={{textAlign: 'center', padding: "5px"}}><strong>No se encontraron registros</strong></td></tr> :
                data.map((row, index) => (
                  <tr key={row.id} style={{backgroundColor: `${index % 2 !== 0 ? "#F3F3F3" : '#FFFFFF'}`, height: 40}}>
                    <td style={{textAlign: 'center'}}><div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: row.status === 'Error' ? 'red' : 'green' }}></div></td>
                    <td>{formatDate(row.eventDate)}</td>
                    <td>{row.senderAs2Id}</td>
                    <td>{row.receiverAs2Id}</td>
                    <td>{row.messageId}</td>
                    <td>{row.payload.slice(0, 10)}</td>
                  </tr>
                ))
              }

          </tbody>
          </table>
        </div>
      </section>
      <footer style={{border: "1px solid #D0D0D0", display: 'flex', gap: 10, padding: 10, borderRadius: 4}}>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, border: '1px solid #D0D0D0'}}></div>
          <p>
            {data.length}
          </p>
        </div>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: 'green'}}></div>
          <p>
            {data.filter(row => row.status === 'Ok').length}
          </p>
          </div>
        <div style={{display: 'flex', gap: 5}}>
          <div style={{width: 20, height: 20, display: 'inline-block', borderRadius: 4, backgroundColor: 'red'}}></div>
          <p>
          {data.filter(row => row.status === 'Error').length}
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
