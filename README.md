
# Hide your text by random key

This tool use random numbers to hide your text from search engines finding your internet activity. It has been deployed online: 

- https://hide-text.com/ (Official Domain)
- https://hide-text.vercel.app/ (Original deployment URL, fully compatible)

## Use Case

Suppose your email address is "my_special_name@example.com".

You can use hide-text.com to generate multiple random addresses:
- https://hide-text.com/?c=F0ouRxQuBlwbXy5aBSYAdR9LEFkUJwAbGVwc&k=z3q4dKe5 (Random Address A)
- https://hide-text.com/?c=GAMzNCMLCgYUFjMpMgMMLxACDSojAgxBFhUB&k=uzlGSnio (Random Address B)

Clicking on any of these distinct random addresses reveals your actual address: "my_special_name@example.com".

You can post "Random Address A" on Sub-A and "Random Address B" on Sub-B.

### Scenario 1: The random address cannot be retrieved from your real email address

If someone searches for your real email address—"my_special_name@example.com"—on Google, they will not see the "Random Address A" you posted on Sub-A.

This is because your real email address was not made public on Sub-A, and Google does not link "Random Address A" to your real email address.

### Scenario 2: A leak of one random address does not expose the other

If someone learns of "Random Address A" and searches for it on Google, they will only see the record you left on Sub-A. They will not be able to discover "Random Address B," which you posted on Sub-B.

This is because it is impossible to derive "Random Address B" from "Random Address A."

## Technical Implementation

1. Encryption and decryption utilize the self-inverse property of the XOR operation: XORing the plaintext with the key yields the ciphertext, while XORing the ciphertext with the key again recovers the original plaintext.
2. The page displaying the ciphertext uses "noindex" and "canonical" tags to prevent Google from indexing it.
3. All information --- including both the ciphertext and the key --- is contained within the URL. Due to URL length limitations and to ensure reliability, the text string to be encrypted is limited to 1,400 characters.

## Privacy

1. A client-side only application with no backend, no database, and zero external network calls.
2. No cookies, sessions, or other tracking mechanisms are used.
3. Open source.

### Screenshot
![](https://raw.githubusercontent.com/maxyou/HideText/main/screenshot.png)
