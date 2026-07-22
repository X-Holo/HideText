
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

#### Scenario 1:

Let's say you frequent Reddit Sub-A and often leave "Random Address A" as your contact info there.

A nosy colleague searches for your email "my_special_name@example.com" on Google but finds nothing. This is because your actual email address isn't posted on Sub-A, and Google neither indexes "Random Address A" nor links it to your email.

In other words, even if someone knows your real email address, they cannot trace it back to your random addresses, thereby effectively protecting your privacy.

#### Scenario 2:

Now, imagine an acquaintance from Sub-A wants to pry into your privacy. They know both your email and "Random Address A," so they search for "Random Address A" on Google. However, they cannot find any information about your activities outside of Sub-A.

In reality, you are also active on Sub-B, where you use "Random Address B." Since there is no way to deduce "Random Address B" from "Random Address A," your acquaintance from Sub-A has no way of knowing about "Random Address B" and thus cannot discover your activity on Sub-B.

In other words, even if one random address is exposed, the others remain undiscovered, ensuring the continued security of your privacy.

## Technical Implementation

1. Encryption involves an XOR operation between the plaintext and a random key; decryption involves a second XOR operation to restore the plaintext. This process occurs entirely within the browser.
2. The page displaying the ciphertext uses "noindex" and "canonical" tags to prevent Google from indexing it.
3. The ciphertext and key are included in the URL. Due to URL length limitations, and to ensure reliability, the text string to be encrypted is limited to 1,400 characters.

## Privacy

1. It is a purely static webpage; there is no server-side backend and no database.
2. No cookies, sessions, or other tracking mechanisms are used.
3. Open source.

### Screenshot
![](https://raw.githubusercontent.com/maxyou/HideText/main/screenshot.png)
