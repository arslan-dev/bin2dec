# Bin2Dec v2.0

https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md

#### Features

- [ ]  User can enter up to 8 binary digits in one input field
- [ ]  User must be notified if anything other than a 0 or 1 was entered
- [ ]  User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

#### Bonus features

- [ ]  User can enter a variable number of binary digits

#### Implementation details

In order to allow both 8 digits max and variable digits conditions, the solution have been equipped with two different modes of operation:
1. Simple mode. 8 digits max, uses `parseInt(binaryString, 2)`
2. Custom mode. Variable number of digits and custom conversion.
The "character limit exceeded" error will appear only for the simple mode.