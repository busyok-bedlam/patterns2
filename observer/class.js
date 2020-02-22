class NewsBroadcaster {
	#news;
	#subscribers;
	constructor() {
		this.#news = [];
		this.#subscribers = new Set();
	}
	getLastNews() {
		return this.#news[this.#news.length - 1];
	}
	broadcast() {
		for(let subsriber of this.#subscribers) {
			subsriber.inform(this.getLastNews());
		}
	}
	register(subscriber) {
		this.#subscribers.add(subscriber);
	}
	setNews(data) {
		this.#news.push(data);
		this.broadcast();
	}
}

class Subscriber {
	constructor(name) {
		this.name = name;
	}
	inform(message) {
		console.log(`${this.name || 'anonimus user'} get news with such body ${message}`);
	}
}

const subscriber1 = new Subscriber('JOHN');
const subscriber2 = new Subscriber('BEN');
const subscriber3 = new Subscriber('HARRY');
const broadcaster1 = new NewsBroadcaster();
broadcaster1.register(subscriber1);
broadcaster1.register(subscriber2);
broadcaster1.register(subscriber3);
broadcaster1.setNews('NEWS1');
broadcaster1.setNews('NEWS2');
