<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="$props.seamless" seamless position="bottom">
            <q-card style="width: 350px">
                <q-toolbar class="text-white shadow-2 bg-cc-sec " side>
                    <q-toolbar-title class="col-md-10 col-xs-10 cf-body">Chat</q-toolbar-title>
                    <q-btn flat round icon="close" @click="$props.seamless=false" class="q-ml-md" />
                </q-toolbar>
                <q-card-section class="items-center no-wrap">
                    <div>
                        <div class="q-pb-xl q-mb-xl row justify-center">
                            <div style="width: 100%; max-width: 400px">
                                <q-chat-message name="Coast" :text="['¡Bienvenido a COAST! Soy tu asistente virtual 🙂. ¿En qué puedo ayudarte?']" class="cf-body" text-color="white" />
                                <q-chat-message name="Sarah" :text="['Hola, necesito ayuda']" sent text-color="white" />

                            </div>
                        </div>
                    </div>

                </q-card-section>
                <q-card-section class="items-center no-wrap bg-cc-pri q-pa-sm">
                    <q-input rounded outlined maxlength="20" dense>
                        <template v-slot:append>
        <q-icon name="sentiment_satisfied_alt" color="white" />
</template>

<template v-slot:after>
    <q-btn round dense flat icon="send" color="white" />
</template>
                    </q-input>
                </q-card-section>


            </q-card>
        </q-dialog>
    </div>
</template>

<style lang="sass">
@import 'src/css/quasar.variables.scss'

.my-emoticon
  vertical-align: middle
  height: 2em
  width: 2em

.alura
  max-width: 406px
  min-height: 433px

.q-message-text--sent
  color: $cc-pri
  border-radius: 24px 24px 0px 24px

.q-message-text--received
  color: $cc-sec
  border-radius: 24px 24px 24px 0px
</style>

<script>
export default {
    props:{
        seamless:{
            type:Boolean,
            default: false
        }
    }
}
</script>


