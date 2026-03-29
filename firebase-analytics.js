// ============================================
// Firebase Analytics & View Counter
// ============================================

// Firebase Configuration - REPLACE WITH YOUR CREDENTIALS
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Local Storage Fallback (if Firebase not configured)
const VIEW_COUNT_KEY = 'vuthikor_portfolio_views';
let isFirebaseInitialized = false;

// Initialize Firebase
function initializeFirebase() {
    try {
        if (firebaseConfig.apiKey.includes('YOUR_')) {
            console.warn('Firebase config not set. Using local storage fallback.');
            useLocalStorageCounter();
            return;
        }
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        
        // Initialize Analytics
        const analytics = firebase.analytics();
        
        // Log page view event
        firebase.analytics().logEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href,
            timestamp: new Date().toISOString()
        });
        
        isFirebaseInitialized = true;
        console.log('✅ Firebase Analytics initialized successfully');
        
        // Fetch view count from Firebase
        fetchViewCountFromFirebase();
        
    } catch (error) {
        console.error('Firebase initialization error:', error);
        useLocalStorageCounter();
    }
}

// Local Storage Fallback Counter
function useLocalStorageCounter() {
    let viewCount = localStorage.getItem(VIEW_COUNT_KEY) || 0;
    viewCount = parseInt(viewCount) + 1;
    localStorage.setItem(VIEW_COUNT_KEY, viewCount);
    updateViewCountDisplay(viewCount);
    console.log(`📊 Page view count (local): ${viewCount}`);
}

// Fetch view count from Realtime Database
function fetchViewCountFromFirebase() {
    try {
        if (!isFirebaseInitialized) {
            useLocalStorageCounter();
            return;
        }
        
        const database = firebase.database();
        const viewCountRef = database.ref('portfolio/viewCount');
        
        // Increment view count
        viewCountRef.transaction(function(currentValue) {
            return (currentValue || 0) + 1;
        }, function(error, committed, snapshot) {
            if (error) {
                console.error('Transaction error:', error);
                useLocalStorageCounter();
            } else if (committed) {
                const newViewCount = snapshot.val();
                updateViewCountDisplay(newViewCount);
                console.log(`📊 Page View Count (Firebase): ${newViewCount}`);
                
                // Log custom event
                firebase.analytics().logEvent('portfolio_view', {
                    view_count: newViewCount,
                    timestamp: new Date().toISOString()
                });
            }
        });
        
    } catch (error) {
        console.error('Firebase view count error:', error);
        useLocalStorageCounter();
    }
}

// Update the view count display in sidebar
function updateViewCountDisplay(count) {
    const viewCountElement = document.getElementById('viewCountBadge');
    if (viewCountElement) {
        viewCountElement.textContent = formatViewCount(count);
        // Add animation
        viewCountElement.classList.add('count-updated');
        setTimeout(() => {
            viewCountElement.classList.remove('count-updated');
        }, 600);
    }
}

// Format view count (1000 -> 1K, 1000000 -> 1M)
function formatViewCount(count) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(1) + 'M';
    } else if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
}

// Track specific user actions
function trackUserAction(action, details = {}) {
    try {
        if (isFirebaseInitialized) {
            firebase.analytics().logEvent(action, {
                ...details,
                timestamp: new Date().toISOString()
            });
            console.log(`📍 Tracked: ${action}`, details);
        }
    } catch (error) {
        console.error('Error tracking action:', error);
    }
}

// Track modal opening
function trackModalOpen(showcaseId) {
    trackUserAction('showcase_modal_open', {
        showcase_id: showcaseId,
        page_location: window.location.href
    });
}

// Track section switching
function trackSectionSwitch(pageId) {
    trackUserAction('section_switch', {
        page_id: pageId,
        timestamp: new Date().toISOString()
    });
}

// Track button clicks
function trackButtonClick(buttonName) {
    trackUserAction('button_click', {
        button_name: buttonName,
        timestamp: new Date().toISOString()
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Firebase Analytics initializing...');
    initializeFirebase();
});

// Track user engagement (scroll depth)
let maxScrollDepth = 0;
window.addEventListener('scroll', function() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercent = (scrolled / scrollHeight) * 100;
    
    if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        
        // Log milestone every 25%
        if (maxScrollDepth % 25 < 5) {
            trackUserAction('scroll_depth', {
                scroll_percent: Math.round(maxScrollDepth),
                timestamp: new Date().toISOString()
            });
        }
    }
});

// Track time spent on page
let timeOnPageStart = Date.now();
window.addEventListener('beforeunload', function() {
    const timeSpent = (Date.now() - timeOnPageStart) / 1000; // in seconds
    trackUserAction('page_exit', {
        time_spent_seconds: Math.round(timeSpent),
        timestamp: new Date().toISOString()
    });
});

console.log('✅ Firebase Analytics script loaded');
