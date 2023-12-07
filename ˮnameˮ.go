package ˮnameˮ

import (
	"fmt"

	"go.k6.io/k6/js/modules"
)

//go:generate go run github.com/szkiba/tygor@latest --skeleton index.d.ts
//go:generate go run github.com/szkiba/tygor@latest doc --inject README.md index.d.ts

func init() {
	register(newModule)
}

func newModule(_ modules.VU) goModule {
	return &goModuleImpl{goˮPrimaryClassˮ: &goˮPrimaryClassˮImpl{greeting: "Hello, World!"}}
}

type goModuleImpl struct {
	goˮPrimaryClassˮ goˮPrimaryClassˮ
}

var _ goModule = (*goModuleImpl)(nil)

func (mod *goModuleImpl) newˮPrimaryClassˮ(nameArg string) (goˮPrimaryClassˮ, error) {
	msg := fmt.Sprintf("Hello, %s!", nameArg)

	return &goˮPrimaryClassˮImpl{greeting: msg}, nil
}

func (mod *goModuleImpl) defaultˮPrimaryClassˮGetter() (goˮPrimaryClassˮ, error) {
	return mod.goˮPrimaryClassˮ, nil
}

type goˮPrimaryClassˮImpl struct {
	greeting string
}

var _ goˮPrimaryClassˮ = (*goˮPrimaryClassˮImpl)(nil)

func (impl *goˮPrimaryClassˮImpl) greetingGetter() (string, error) {
	return impl.greeting, nil
}
