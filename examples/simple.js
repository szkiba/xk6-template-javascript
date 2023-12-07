import globalˮPrimaryClassˮ, { ˮPrimaryClassˮ } from "k6/x/ˮnameˮ";

export default function () {
  console.log(globalˮPrimaryClassˮ.greeting);

  let instance = new ˮPrimaryClassˮ("Wonderful World");
  console.log(instance.greeting);
}
