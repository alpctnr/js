const sendAnalytics = setInterval(() => {
    console.log('sending analytics data...');
}, 2000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(sendAnalytics);
})