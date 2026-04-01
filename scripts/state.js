// What is State?
// State means the current situation of the app.
// Data that the program should remember
// - What data do we have? چه داده‌ای داریم؟
// - Where is that data stored? آن داده کجا نگه‌داری می‌شود؟
// - When does it change? چه موقع تغییر می‌کند؟
// - Who uses it? چه کسی از آن استفاده می‌کند؟

// For example, in a Pokédex app, the program needs to know:
// - Which Pokémon are already loaded
// - Are we getting data from the API right now or not
// - Where to start getting the next data
// - How many items to get each time
// If the app doesn’t know these things,
// it cannot work correctly.

// Why do we need state?
// Because the app is always changing.
// Data updates while the app is running,
// so we need to keep track of it.
//offset = از کدام نقطه شروع به برگرداندن داده کند(API)مشخص می‌کند
//loadedPokemons = نگه داشتن همه‌ی پوکمون‌هایی که تا این لحظه لود شده‌اند
//limit = تعداد آیتمی که در هر درخواست می‌خواهیم بگیریم20
//isLoading = نشان می‌دهد الان برنامه وسط یک درخواست هست یا نه


//TODO
// This is the application state that holds the loaded data
let loadedPokemons = [];
let currentOffset = 0;
let limit = 20;
let isLoading = false; // async controller

// let selectedPokemon = 0;
// let currentPokemonIndex = 0;
// let searchResults = [];
// let isSearchMode = false;
