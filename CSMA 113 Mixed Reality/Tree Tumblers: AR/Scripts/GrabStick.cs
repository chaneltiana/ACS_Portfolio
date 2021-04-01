using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class GrabStick : MonoBehaviour
{

     public GameObject stick;
     bool isGrabbed = false;
     public AudioSource pop;
    Renderer rend;
    Collider collide;


    void Start()
    {
        pop = GetComponent<AudioSource>();
        rend = GetComponent<Renderer>();
        collide = GetComponent<Collider>();

    }

    void OnMouseDown() {
        isGrabbed = !isGrabbed;
        Debug.Log("Grabbed");

        pop.Play();
        //stick.SetActive(false);
        rend.enabled = false;
        collide.enabled = false;
    }

}