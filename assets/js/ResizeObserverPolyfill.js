// 封装ResizeObserver类，使其更易于使用
class ResizeObserverPolyfill {
    constructor() {
        this.observer = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const callback = this.callbacks.get(entry.target);
                if (callback) {
                    callback(entry);
                }
            });
        });
        this.callbacks = new WeakMap();
    }

    observe(element, callback) {
        if (typeof callback !== 'function') {
            throw new TypeError('Callback must be a function');
        }
        this.callbacks.set(element, callback);
        this.observer.observe(element);
    }

    unobserve(element) {
        this.callbacks.delete(element);
        this.observer.unobserve(element);
    }

    disconnect() {
        this.callbacks.clear();
        this.observer.disconnect();
    }
}

// 使用示例
// const resizeObserver = new ResizeObserverPolyfill();
// const element = document.getElementById('myElement');
//
// resizeObserver.observe(element, entry => {
//     console.log('Element resized', entry);
// });

// 当不再需要监听时
// resizeObserver.unobserve(element);