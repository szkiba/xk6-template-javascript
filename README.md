<!--

  You can edit the file as you like before or after the HTML comment,
  but do not edit the API documentation between the following HTML comments,
  it was automatically generated from the index.d.ts file.

  You can regenerate the API documentation and bindings code at any time
  by "go generate ." command. The "//go:generate ..." comments required for this
  can be found in the ˮnameˮ.go file.

-->
<!-- begin:api -->
xk6-template-javascript
=======================

ˮsummaryˮ

<details><summary><em>Example</em></summary>

```ts
import globalˮPrimaryClassˮ, { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ"

export default function () {
  console.log(globalˮPrimaryClassˮ.greeting)

  let instance = new ˮPrimaryClassˮ("Wonderful World")
  console.log(instance.greeting)
}
```

</details>

The [examples](https://github.com/szkiba/xk6-template-javascript/blob/master/examples) directory contains examples of how to use the xk6-template-javascript extension. A k6 binary containing the xk6-template-javascript extension is required to run the examples. *If the search path also contains the k6 command, don't forget to specify which k6 you want to run (for example `./k6`\)*.

<details>
<summary><strong>Build</strong></summary>

The [xk6](https://github.com/grafana/xk6) build tool can be used to build a k6 that will include xk6-template-javascript extension:

```bash
$ xk6 build --with github.com/szkiba/xk6-template-javascript@latest
```

For more build options and how to use xk6, check out the [xk6 documentation]([xk6](https://github.com/grafana/xk6)).

</details>

API
===

ˮPrimaryClassˮ
--------------

This is the primary class of the ˮnameˮ extension.

<details><summary><em>Example</em></summary>

```ts
import { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ"

export default function () {
  let instance = new ˮPrimaryClassˮ("Wonderful World")
  console.log(instance.greeting)
}
```

</details>

### ˮPrimaryClassˮ()

```ts
constructor(name: string);
```

-	`name` to whom the greeting is addressed

Create a new ˮPrimaryClassˮ instance.

### ˮPrimaryClassˮ.greeting

```ts
readonly greeting: string;
```

Greeting message
<!-- end:api -->
