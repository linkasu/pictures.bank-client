# LINKa pictures bank. (JavaScript) Library.

## Description
Thhis is a library of pictures for LINKa bank service (https://pictures.linka.su/api). This library provides a simple way to get a picture from the bank.

## Installation
```bash
npm i -S https://github.com/linkasu/pictures.bank-client.git
yarn add https://github.com/linkasu/pictures.bank-client.git
```
## Usage
``typescript
const api = new PictureBankApi() // Create an instance of the API (Read access)
// OR
const api = new PictureBankApi('APP-KEY') // Create an instance of the API (Wite access)
```
### Get the categories list
```typescript
const categories = await api.categories.getCategories()
```
### Get the pictures list in the category
```typescript
const pictures = await api.pictures.getPicturesByCategory('category-id')
```
### Search the pictures
```typescript
const pictures = await api.pictures.searchPictures('search-query')
```
### Get the picture
```
https://pictures.linka.su/picture/{id}/buffer
```