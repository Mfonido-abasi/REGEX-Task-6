# Mastercard Validator

## Description
This simple credit card validation system specifically checks if a card number belongs to a Mastercard.
If the card is a Mastercard, it returns the number, otherwise, it returns null.
However, it still extracts and displays other card details.

Mastercard numbers typically start with 51 to 55 or 2221 to 2720.
The function checks the card number against these prefixes.
If the number matches, it returns the full card details; otherwise, it returns null.
