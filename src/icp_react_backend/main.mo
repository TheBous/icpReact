actor {
	stable var counter = 0;

	// Get the value of the counter.
	public query func getCounter() : async Nat {
		return counter;
	};

	// Set the value of the counter.
	public func setCounter(n : Nat) : async () {
		counter := n;
	};

	// Increment the value of the counter.
	public func incCounter() : async () {
		counter += 1;
	};

	public query func greet(name : Text) : async Text {
		return "Hello, " # name # "!";
	};
};
