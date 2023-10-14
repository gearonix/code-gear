# Frontend Architecture

There are several well-known types of architecture in the frontend. I experimented 
with some of them, such as [atomic-design](https://bradfrost.com/blog/post/atomic-web-design/)
, but settled on FSD + Microfrontends.


## Feature-Sliced-Design

In [FSD](https://feature-sliced.design/docs/get-started/overview), a project consists of layers, each layer is made up of slices.

In general, you can read about it in the [documentation](https://feature-sliced.design/docs/get-started/tutorial),
I just want to tell you how I managed to connect this with microfrontends.

## Usage with Microfrontends

I came to the conclusion that every frontend application in the monorepository has the same structure with all `layers` (widgets, entities, features) *including* the shared module.

Due to the fact that this is a `monorepository`, we can *encapsulate* the logic of `shared` layers in 
libraries (for example, `packages/shared` or `ui-kit` with storybook) and reuse the same components 
from the layer on top (applications).

## Apps can have their own `shared` layer

Despite this, applications can have their own local shared layers, where reusable logic is collected,
relevant *only* for this application.

```
~/apps/client

├─ app
├─ entities
├─ features
├─ widgets
├─ pages
├─ shared - can also be in the application

```


## Nx 80/20 rule

In development, I followed the `80/20` methodology, which promotes the idea that 
*80% of the logic* should be stored in libraries.

- place 80% of your logic into the `libs/` folder
- and 20% into `apps/`

You can read more about it in the Nx [documentation](https://nx.dev/concepts/more-concepts/applications-and-libraries).
