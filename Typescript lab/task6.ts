export class KeyValuePair<K, V> {
  private key: K;
  private value: V;
  setKeyValue(key: K, value: V) {
    this.key = key;
    this.value = value;
  }
  display() {
    console.log(`key = ${this.key}, value = ${this.value}`);
  }
}

let kvp = new KeyValuePair<number, string>();
kvp.setKeyValue(1, "Steve");
kvp.display();

